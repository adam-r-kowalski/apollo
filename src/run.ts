import { pointerDown } from "./ui/pointer_down"
import { render } from "./ui/render"
import { webGL2Renderer } from "./ui/webgl2"
import { Pointer, UI } from "./ui"
import { Document, Window, PointerEvent } from "./ui/dom"

export const transformPointer = (p: PointerEvent): Pointer => ({
    id: p.pointerId,
    position: { x: p.clientX, y: p.clientY },
})

export type Dispatch<AppEvent> = (event: AppEvent) => void

type View<Model, AppEvent> = (model: Model, dispatch: Dispatch<AppEvent>) => UI

type Update<Model, AppEvent> = (
    model: Model,
    event: AppEvent,
    dispatch: Dispatch<AppEvent>
) => Model

interface Properties<Model, AppEvent> {
    model: Model
    view: View<Model, AppEvent>
    update: Update<Model, AppEvent>
    window: Window<AppEvent>
    document: Document
    requestAnimationFrame: (callback: () => void) => void
    pointerDown: (dispatch: Dispatch<AppEvent>, pointer: Pointer) => void
}

export const run = <Model, AppEvent>(
    properties: Properties<Model, AppEvent>
): Dispatch<AppEvent> => {
    let { model, view, update, window, document, requestAnimationFrame } =
        properties
    let renderer = webGL2Renderer({
        width: window.innerWidth,
        height: window.innerHeight,
        window,
        document,
    })
    let renderQueued = false
    const scheduleRender = () => {
        if (!renderQueued) {
            renderQueued = true
            requestAnimationFrame(() => {
                renderer = render(renderer, view(model, dispatch))
                renderQueued = false
            })
        }
    }
    window.addEventListener("message", (message) => {
        const newModel = update(model, message.data, dispatch)
        const modelChanged = model !== newModel
        model = newModel
        if (modelChanged) scheduleRender()
    })
    const dispatch = (event: AppEvent): void => window.postMessage(event)
    document.body.appendChild(renderer.canvas)
    document.addEventListener("pointerdown", (p) => {
        const transformed = transformPointer(p)
        properties.pointerDown(dispatch, transformed)
        renderer = pointerDown(renderer, transformed)
    })
    window.addEventListener("resize", () => {
        renderer.size = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        scheduleRender()
    })
    scheduleRender()
    return dispatch
}
