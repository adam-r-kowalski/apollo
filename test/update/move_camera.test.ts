import { identity, translate } from "../../src/linear_algebra/matrix3x3"
import { Model } from "../../src/model"
import { emptyModel } from "../../src/model/empty"
import { FocusKind } from "../../src/model/focus"
import { PointerActionKind } from "../../src/model/pointer_action"
import { QuickSelectKind } from "../../src/model/quick_select"
import { Pointer } from "../../src/ui"
import { EventKind, update } from "../../src/update"
import { makeEffects } from "../mock_effects"

test("pointer down starts panning camera", () => {
    const model = emptyModel()
    const pointer: Pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const { model: model1 } = update(makeEffects(), model, {
        kind: EventKind.POINTER_DOWN,
        pointer
    })
    const expectedModel: Model = {
        ...emptyModel(),
        focus: {
            kind: FocusKind.NONE,
            pointerAction: { kind: PointerActionKind.PAN },
            quickSelect: { kind: QuickSelectKind.NONE }
        },
        pointers: [pointer],
    }
    expect(model1).toEqual(expectedModel)
})

test("h when nothing focused pans camera left", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'h',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(-0.5, 0),
        moveCamera: { left: true, up: false, down: false, right: false, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'h'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(-0.5, 0),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})

test("Left arrow when nothing focused pans camera left", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'ArrowLeft',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(-0.5, 0),
        moveCamera: { left: true, up: false, down: false, right: false, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'ArrowLeft'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(-0.5, 0),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})


test("j when nothing focused pans camera down", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'j',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(0, 0.5),
        moveCamera: { left: false, up: false, down: true, right: false, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'j'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(0, 0.5),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})

test("Down arrow when nothing focused pans camera down", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'ArrowDown',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(0, 0.5),
        moveCamera: { left: false, up: false, down: true, right: false, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'ArrowDown'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(0, 0.5),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})


test("k when nothing focused pans camera up", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'k',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(0, -0.5),
        moveCamera: { left: false, up: true, down: false, right: false, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'k'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(0, -0.5),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})

test("Up Arrow when nothing focused pans camera up", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'ArrowUp',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(0, -0.5),
        moveCamera: { left: false, up: true, down: false, right: false, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'ArrowUp'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(0, -0.5),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})


test("l when nothing focused pans camera right", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'l',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(0.5, 0),
        moveCamera: { left: false, up: false, down: false, right: true, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'l'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(0.5, 0),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})

test("Right arrow when nothing focused pans camera right", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'ArrowRight',
        ctrl: false
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(0.5, 0),
        moveCamera: { left: false, up: false, down: false, right: true, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'ArrowRight'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(0.5, 0),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})


test("pressing h then l when nothing focused does nothing", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch: dispatch0 } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'h',
        ctrl: false
    })
    expect(dispatch0).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, dispatch: dispatch1 } = update(effects, model1, {
        kind: EventKind.KEYDOWN,
        key: 'l',
        ctrl: false
    })
    expect(dispatch1).toBeUndefined()
    const { model: model3, schedule } = update(effects, model2, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model3).toEqual({
        ...emptyModel(),
        camera: identity(),
        moveCamera: { left: true, up: false, down: false, right: true, now: 1 }
    })
})


test("pressing a non hotkey when nothing focused does nothing", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch: dispatch0 } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'z',
        ctrl: false
    })
    expect(dispatch0).toBeUndefined()
    expect(model1).toEqual(model)
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA,
    })
    expect(schedule).toBeUndefined()
    expect(model2).toEqual(model)
    const { model: model3, dispatch: dispatch1 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'z'
    })
    expect(dispatch1).toBeUndefined()
    expect(model3).toEqual(model)
})


test("ctrl j when nothing focused zooms camera in", () => {
    const model = emptyModel()
    const effects = makeEffects()
    const { model: model1, dispatch } = update(effects, model, {
        kind: EventKind.KEYDOWN,
        key: 'j',
        ctrl: true
    })
    expect(dispatch).toEqual([{ kind: EventKind.PAN_CAMERA }])
    const { model: model2, schedule } = update(effects, model1, {
        kind: EventKind.PAN_CAMERA
    })
    expect(schedule).toEqual([{
        after: { milliseconds: 10 },
        event: { kind: EventKind.PAN_CAMERA }
    }])
    expect(model2).toEqual({
        ...emptyModel(),
        camera: translate(0, 0.5),
        moveCamera: { left: false, up: false, down: true, right: false, now: 1 }
    })
    const { model: model3, dispatch: dispatch0 } = update(effects, model2, {
        kind: EventKind.KEYUP,
        key: 'j'
    })
    expect(dispatch0).toBeUndefined()
    expect(model3).toEqual({
        ...emptyModel(),
        camera: translate(0, 0.5),
        moveCamera: { left: false, up: false, down: false, right: false, now: 1 }
    })
})
