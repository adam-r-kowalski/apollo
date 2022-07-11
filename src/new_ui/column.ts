import { Constraints, geometry, Geometry, Layout, layout, MeasureText, Offset, Size, UI, UIKind, WorldSpace } from "."
import { MainAxisAlignment, CrossAxisAlignment } from "./alignment"
import { CameraStack, transformWorldSpace } from "./camera_stack"

export interface ColumnLayout {
    readonly size: Size
    readonly totalChildHeight: number
    readonly children: Layout[]
}

export interface ColumnGeometry {
    readonly worldSpace: WorldSpace
    readonly children: Geometry[]
}

export interface Column<UIEvent> {
    readonly kind: UIKind.COLUMN,
    readonly mainAxisAlignment: MainAxisAlignment
    readonly crossAxisAlignment: CrossAxisAlignment
    readonly children: UI<UIEvent>[]
}

interface Properties {
    readonly mainAxisAlignment?: MainAxisAlignment
    readonly crossAxisAlignment?: CrossAxisAlignment
}

type Overload<UIEvent> = {
    (children: UI<UIEvent>[]): Column<UIEvent>
    (properties: Properties, children: UI<UIEvent>[]): Column<UIEvent>
}

export const column: Overload<UIEvent> = <UIEvent>(...args: any[]): Column<UIEvent> => {
    const [properties, children]: [Properties, UI<UIEvent>[]] = (() =>
        args[0] instanceof Array ? [{}, args[0]] : [args[0], args[1]]
    )()
    return {
        kind: UIKind.COLUMN,
        mainAxisAlignment: properties.mainAxisAlignment ?? MainAxisAlignment.START,
        crossAxisAlignment: properties.crossAxisAlignment ?? CrossAxisAlignment.START,
        children
    }
}

export const columnLayout = <UIEvent>(ui: Column<UIEvent>, constraints: Constraints, measureText: MeasureText): ColumnLayout => {
    const initialChildren: Layout[] = []
    const initial = {
        children: initialChildren,
        width: 0,
        totalChildHeight: 0
    }
    const result = ui.children.reduce((acc, child) => {
        const childLayout = layout(child, constraints, measureText)
        acc.children.push(childLayout)
        acc.totalChildHeight += childLayout.size.height
        acc.width = Math.max(acc.width, childLayout.size.width)
        return acc
    }, initial)
    const { children, width, totalChildHeight } = result
    const height = ui.mainAxisAlignment == MainAxisAlignment.START ? totalChildHeight : constraints.maxHeight
    return {
        size: { width, height },
        totalChildHeight,
        children
    }
}

export const columnGeometry = <UIEvent>(ui: Column<UIEvent>, layout: ColumnLayout, offset: Offset, cameraStack: CameraStack): ColumnGeometry => {
    const initialChildren: Geometry[] = []
    const freeSpaceY = layout.size.height - layout.totalChildHeight
    const initial = {
        children: initialChildren,
        y: (() => {
            switch (ui.mainAxisAlignment) {
                case MainAxisAlignment.START: return offset.y
                case MainAxisAlignment.CENTER: return offset.y + freeSpaceY / 2
                case MainAxisAlignment.END: return offset.y + freeSpaceY
                case MainAxisAlignment.SPACE_EVENLY: return offset.y + freeSpaceY / (ui.children.length + 1)
                case MainAxisAlignment.SPACE_BETWEEN: return offset.y
            }
        })(),
    }
    const addYStart = (childLayout: Layout) => childLayout.size.height
    const addYCenter = (childLayout: Layout) => childLayout.size.height
    const addYEnd = (childLayout: Layout) => childLayout.size.height
    const addYSpaceEvenly = (childLayout: Layout) => childLayout.size.height + freeSpaceY / (ui.children.length + 1)
    const addYSpaceBetween = (childLayout: Layout) => childLayout.size.height + freeSpaceY / (ui.children.length - 1)
    const addY = (() => {
        switch (ui.mainAxisAlignment) {
            case MainAxisAlignment.START: return addYStart
            case MainAxisAlignment.CENTER: return addYCenter
            case MainAxisAlignment.END: return addYEnd
            case MainAxisAlignment.SPACE_EVENLY: return addYSpaceEvenly
            case MainAxisAlignment.SPACE_BETWEEN: return addYSpaceBetween
        }
    })()
    const offsetXStart = (_: Layout) => offset.x
    const offsetXCenter = (childLayout: Layout) => offset.x + layout.size.width / 2 - childLayout.size.width / 2
    const offsetXEnd = (childLayout: Layout) => offset.x + layout.size.width - childLayout.size.width
    const offsetX = (() => {
        switch (ui.crossAxisAlignment) {
            case CrossAxisAlignment.START: return offsetXStart
            case CrossAxisAlignment.CENTER: return offsetXCenter
            case CrossAxisAlignment.END: return offsetXEnd
        }
    })()
    const result = ui.children.reduce((acc, child, i) => {
        const childLayout = layout.children[i]
        const childOffset = { x: offsetX(childLayout), y: acc.y }
        const childGeometry = geometry(child, childLayout, childOffset, cameraStack)
        acc.children.push(childGeometry)
        acc.y += addY(childLayout)
        return acc
    }, initial)
    const worldSpace = transformWorldSpace(cameraStack, {
        x0: offset.x,
        y0: offset.y,
        x1: offset.x + layout.size.width,
        y1: offset.y + layout.size.height
    })
    return { worldSpace, children: result.children }
}
