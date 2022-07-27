import { addNodeToGraph, EventKind, openFinder, update } from "../src/event"
import { Operations } from "../src/graph/model"
import { changeNodePosition } from "../src/graph/update"
import { translate } from "../src/linear_algebra/matrix3x3"
import { emptyState, SelectedKind, State } from "../src/state"
import { Pointer } from "../src/ui"

const generateUUID = () => {
    let i = 0
    return () => {
        const uuid = i.toString()
        ++i
        return uuid
    }
}

test("pointer down", () => {
    const state = emptyState()
    const pointer: Pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const { state: state1, schedule } = update(generateUUID(), state, {
        kind: EventKind.POINTER_DOWN,
        pointer
    })
    const expectedState = {
        ...emptyState(),
        dragging: true,
        pointers: [pointer],
        potentialDoubleClick: true
    }
    expect(state1).toEqual(expectedState)
    expect(schedule).toEqual([
        {
            after: { milliseconds: 300 },
            event: { kind: EventKind.DOUBLE_CLICK_TIMEOUT }
        }
    ])
})

test("two pointers down", () => {
    const generateUUID0 = generateUUID()
    const state = emptyState()
    const pointer0: Pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const pointer1: Pointer = {
        id: 1,
        position: { x: 0, y: 0 }
    }
    const { state: state1, schedule } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer: pointer0
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.POINTER_DOWN,
        pointer: pointer1
    })
    const expectedState = {
        ...emptyState(),
        pointers: [pointer0, pointer1],
        zooming: true
    }
    expect(state2).toEqual(expectedState)
    expect(schedule).toEqual([
        {
            after: { milliseconds: 300 },
            event: { kind: EventKind.DOUBLE_CLICK_TIMEOUT }
        }
    ])
})

test("pointer double click", () => {
    const generateUUID0 = generateUUID()
    const state = emptyState()
    const pointer: Pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.POINTER_UP,
        pointer
    })
    const { state: state3, dispatch } = update(generateUUID0, state2, {
        kind: EventKind.POINTER_DOWN,
        pointer
    })
    const expectedState = {
        ...emptyState(),
        pointers: [pointer]
    }
    expect(state3).toEqual(expectedState)
    expect(dispatch).toEqual([{ kind: EventKind.DOUBLE_CLICK, pointer }])
})

test("pointer double click timeout", () => {
    const generateUUID0 = generateUUID()
    const state = emptyState()
    const pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.POINTER_UP,
        pointer
    })
    const { state: state3 } = update(generateUUID0, state2, {
        kind: EventKind.DOUBLE_CLICK_TIMEOUT
    })
    const expectedState = emptyState()
    expect(state3).toEqual(expectedState)
})

test("pointer down then up", () => {
    const generateUUID0 = generateUUID()
    const state = emptyState()
    const pointer: Pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.POINTER_UP,
        pointer
    })
    const expectedState = {
        ...emptyState(),
        potentialDoubleClick: true
    }
    expect(state2).toEqual(expectedState)
})

test("two pointers down then up", () => {
    const generateUUID0 = generateUUID()
    const state = emptyState()
    const pointer0: Pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const pointer1: Pointer = {
        id: 1,
        position: { x: 0, y: 0 }
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer: pointer0
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.POINTER_DOWN,
        pointer: pointer1
    })
    const { state: state3 } = update(generateUUID0, state2, {
        kind: EventKind.POINTER_UP,
        pointer: pointer0
    })
    const expectedState = {
        ...emptyState(),
        dragging: true,
        pointers: [pointer1]
    }
    expect(state3).toEqual(expectedState)
})

test("pointer down when finder open", () => {
    const generateUUID0 = generateUUID()
    const state = openFinder(emptyState())
    const pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer
    })
    const expectedState = openFinder(emptyState())
    expect(state1).toEqual(expectedState)
})


test("clicking node selects it and puts it on top of of the node order", () => {
    const generateUUID0 = generateUUID()
    const operations: Operations = {
        'Add': {
            name: 'Add',
            inputs: ['x', 'y'],
            outputs: ['out']
        },
        'Sub': {
            name: 'Sub',
            inputs: ['x', 'y'],
            outputs: ['out']
        }
    }
    const state0: State = {
        ...emptyState(),
        operations
    }
    const { state: state1, node: node0 } = addNodeToGraph({
        state: state0,
        operation: operations['Add'],
        position: { x: 0, y: 0 },
        generateUUID: generateUUID0
    })
    const { state: state2, node: node1 } = addNodeToGraph({
        state: state1,
        operation: operations['Sub'],
        position: { x: 0, y: 0 },
        generateUUID: generateUUID0
    })
    const { state: state3, render } = update(generateUUID0, state2, {
        kind: EventKind.CLICKED_NODE,
        node: node0
    })
    const expectedState = {
        ...state2,
        selected: {
            kind: SelectedKind.NODE,
            node: node0
        },
        nodeOrder: [node1, node0],
    }
    expect(state3).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("pointer move before pointer down does nothing", () => {
    const generateUUID0 = generateUUID()
    const state = emptyState()
    const pointer: Pointer = {
        id: 0,
        position: { x: 0, y: 0 }
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_MOVE,
        pointer
    })
    expect(state1).toEqual(emptyState())
})

test("pointer move after pointer down", () => {
    const generateUUID0 = generateUUID()
    const state = emptyState()
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer: {
            id: 0,
            position: { x: 0, y: 0 }
        }
    })
    const { state: state2, render } = update(generateUUID0, state1, {
        kind: EventKind.POINTER_MOVE,
        pointer: {
            id: 0,
            position: { x: 50, y: 75 }
        }
    })
    const expectedState = {
        ...emptyState(),
        camera: translate(-50, -75),
        potentialDoubleClick: true,
        dragging: true,
        pointers: [
            {
                id: 0,
                position: { x: 50, y: 75 }
            }
        ]
    }
    expect(state2).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("pointer move after clicking node pointer down", () => {
    const generateUUID0 = generateUUID()
    const operations: Operations = {
        'Add': {
            name: 'Add',
            inputs: ['x', 'y'],
            outputs: ['out']
        },
        'Sub': {
            name: 'Sub',
            inputs: ['x', 'y'],
            outputs: ['out']
        }
    }
    const state0: State = {
        ...emptyState(),
        operations
    }
    const { state: state1, node: node0 } = addNodeToGraph({
        state: state0,
        operation: operations['Add'],
        position: { x: 0, y: 0 },
        generateUUID: generateUUID0
    })
    const { state: state2, node: node1 } = addNodeToGraph({
        state: state1,
        operation: operations['Sub'],
        position: { x: 0, y: 0 },
        generateUUID: generateUUID0
    })
    const { state: state3 } = update(generateUUID0, state2, {
        kind: EventKind.CLICKED_NODE,
        node: node0
    })
    const { state: state4 } = update(generateUUID0, state3, {
        kind: EventKind.POINTER_DOWN,
        pointer: {
            id: 0,
            position: { x: 0, y: 0 }
        }
    })
    const { state: state5, render } = update(generateUUID0, state4, {
        kind: EventKind.POINTER_MOVE,
        pointer: {
            id: 0,
            position: { x: 50, y: 75 }
        }
    })
    const expectedState = {
        ...state2,
        pointers: [
            {
                id: 0,
                position: { x: 50, y: 75 }
            }
        ],
        graph: changeNodePosition(state2.graph, node0, () => ({ x: 50, y: 75 })),
        nodeOrder: [node1, node0],
        dragging: true,
        potentialDoubleClick: true,
        selected: {
            kind: SelectedKind.NODE,
            node: node0
        }
    }
    expect(state5).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("pointer move after clicking node, pointer down, then pointer up", () => {
    const generateUUID0 = generateUUID()
    const operations: Operations = {
        'Add': {
            name: 'Add',
            inputs: ['x', 'y'],
            outputs: ['out']
        },
        'Sub': {
            name: 'Sub',
            inputs: ['x', 'y'],
            outputs: ['out']
        }
    }
    const state0: State = {
        ...emptyState(),
        operations
    }
    const { state: state1, node: node0 } = addNodeToGraph({
        state: state0,
        operation: operations['Add'],
        position: { x: 0, y: 0 },
        generateUUID: generateUUID0
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_NODE,
        node: node0
    })
    const { state: state3 } = update(generateUUID0, state2, {
        kind: EventKind.POINTER_DOWN,
        pointer: {
            id: 0,
            position: { x: 0, y: 0 }
        }
    })
    const { state: state4 } = update(generateUUID0, state3, {
        kind: EventKind.POINTER_UP,
        pointer: {
            id: 0,
            position: { x: 0, y: 0 }
        }
    })
    const { state: state5 } = update(generateUUID0, state4, {
        kind: EventKind.POINTER_MOVE,
        pointer: {
            id: 0,
            position: { x: 50, y: 75 }
        }
    })
    const expectedState = {
        ...state1,
        nodePlacementLocation: { x: 50, y: 75 },
        selected: {
            kind: SelectedKind.NODE,
            node: node0
        },
        potentialDoubleClick: true
    }
    expect(state5).toEqual(expectedState)
})

/*
test("mouse wheel zooms in camera relative to mouse position", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.WHEEL,
        x: 50,
        y: 100,
        deltaY: 10
    })
    const expectedState = initialState(generateUUID1)
    expectedState.camera = [
        1.0717734625362931, 0, -3.588673126814655,
        0, 1.0717734625362931, -7.17734625362931,
        0, 0, 1,
    ]
    expect(state1).toEqual(expectedState)
})

test("clicking input selects it", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[2]
    const inputPath = { nodeUUID, inputIndex: 0 }
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_INPUT,
        inputPath
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodes[nodeUUID].inputs[0].selected = true
    expectedState.selectedInput = inputPath
    expectedState.selectedNode = inputPath.nodeUUID
    const [a, b, c, d, e, f] = expectedState.graph.nodeOrder
    expectedState.graph.nodeOrder = [a, b, d, e, f, c]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("clicking new input selects it and deselects old input", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[2]
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_INPUT,
        inputPath: { nodeUUID, inputIndex: 0 }
    })
    const { state: state2, render } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_INPUT,
        inputPath: { nodeUUID, inputIndex: 1 }
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodes[2].inputs[1].selected = true
    expectedState.selectedInput = { nodeUUID, inputIndex: 1 }
    expectedState.selectedNode = nodeUUID
    const [a, b, c, d, e, f] = expectedState.graph.nodeOrder
    expectedState.graph.nodeOrder = [a, b, d, e, f, c]
    expect(state2).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("clicking output after clicking input adds connection", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const inputUUID = state.graph.nodeOrder[2]
    const outputUUID = state.graph.nodeOrder[3]
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_INPUT,
        inputPath: { nodeUUID: inputUUID, inputIndex: 1 }
    })
    const { state: state2, render } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_OUTPUT,
        outputPath: { nodeUUID: outputUUID, outputIndex: 0 }
    })
    const expectedState = initialState(generateUUID1)
    const edge: Edge = {
        uuid: generateUUID1(),
        input: { nodeUUID: inputUUID, inputIndex: 1 },
        output: { nodeUUID: outputUUID, outputIndex: 0 }
    }
    expectedState.graph.edges[edge.uuid] = edge
    expectedState.graph.nodes[inputUUID].inputs[1].edgeUUIDs.push(edge.uuid)
    expectedState.graph.nodes[outputUUID].outputs[0].edgeUUIDs.push(edge.uuid)
    const [a, b, c, d, e, f] = expectedState.graph.nodeOrder
    expectedState.graph.nodeOrder = [a, b, e, f, c, d]
    expect(state2).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("clicking output selects it", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[0]
    const outputPath = { nodeUUID, outputIndex: 0 }
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_OUTPUT,
        outputPath
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodes[0].outputs[0].selected = true
    expectedState.selectedOutput = outputPath
    expectedState.selectedNode = outputPath.nodeUUID
    const [a, b, c, d, e, f] = expectedState.graph.nodeOrder
    expectedState.graph.nodeOrder = [b, c, d, e, f, a]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("clicking new output selects it and deselects old output", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const [a, b, c, d, e, f] = state.graph.nodeOrder
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_OUTPUT,
        outputPath: { nodeUUID: a, outputIndex: 0 }
    })
    const { state: state2, render } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_OUTPUT,
        outputPath: { nodeUUID: b, outputIndex: 0 }
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodes[b].outputs[0].selected = true
    expectedState.selectedOutput = { nodeUUID: b, outputIndex: 0 }
    expectedState.selectedNode = b
    expectedState.graph.nodeOrder = [c, d, e, f, a, b]
    expect(state2).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("clicking input after clicking output adds connection", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const [a, b, c, d, e, f] = state.graph.nodeOrder
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_OUTPUT,
        outputPath: { nodeUUID: a, outputIndex: 0 }
    })
    const { state: state2, render } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_INPUT,
        inputPath: { nodeUUID: c, inputIndex: 1 }
    })
    const expectedState = initialState(generateUUID1)
    const edge: Edge = {
        uuid: generateUUID1(),
        input: { nodeUUID: c, inputIndex: 1 },
        output: { nodeUUID: a, outputIndex: 0 }
    }
    expectedState.graph.edges[edge.uuid] = edge
    expectedState.graph.nodes[c].inputs[1].edgeUUIDs.push(edge.uuid)
    expectedState.graph.nodes[a].outputs[0].edgeUUIDs.push(edge.uuid)
    expectedState.graph.nodeOrder = [b, d, e, f, a, c]
    expect(state2).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("double click opens finder", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.DOUBLE_CLICK,
        pointer: {
            x: 50,
            y: 50,
            id: 0
        }
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard.show = true
    expectedState.inputTarget = { kind: InputTargetKind.FINDER }
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expectedState.nodePlacementLocation = { x: 50, y: 50 }
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})


test("key down when finder is not shown does nothing", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'a'
    })
    const expectedState = initialState(generateUUID1)
    expect(state1).toEqual(expectedState)
})


test("f key down when finder is not shown opens finder", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'f'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard.show = true
    expectedState.inputTarget = { kind: InputTargetKind.FINDER }
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("clicking a finder option adds node to graph", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_FINDER_OPTION,
        option: 'Number'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    const uuid = generateUUID1()
    expectedState.graph.nodes[uuid] = {
        uuid,
        name: "Number",
        inputs: [],
        body: {
            value: 0,
            editing: false,
        },
        outputs: [
            { name: "out", selected: false, edgeUUIDs: [] }
        ],
        x: 0,
        y: 0
    }
    expectedState.graph.nodeOrder.push(uuid)
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("key down when finder is shown appends to search", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'a'
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.KEYDOWN,
        key: 'd'
    })
    const { state: state3, render } = update(generateUUID0, state2, {
        kind: EventKind.KEYDOWN,
        key: 'd'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.finder.search = 'add'
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = ["Add"]
    expect(state3).toEqual(expectedState)
    expect(render).toEqual(true)
})


test("backspace key down when finder is shown deletes from search", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'a'
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.KEYDOWN,
        key: 'd'
    })
    const { state: state3 } = update(generateUUID0, state2, {
        kind: EventKind.KEYDOWN,
        key: 'd'
    })
    const { state: state4, render } = update(generateUUID0, state3, {
        kind: EventKind.KEYDOWN,
        key: 'Backspace'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.finder.search = 'ad'
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = ["Add"]
    expect(state4).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("enter key down when finder is shown closes finder and adds node", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Enter'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    const uuid = generateUUID1()
    expectedState.graph.nodes[uuid] = {
        uuid,
        name: "Number",
        inputs: [],
        body: {
            value: 0,
            editing: false,
        },
        outputs: [
            { name: "out", selected: false, edgeUUIDs: [] }
        ],
        x: 0,
        y: 0
    }
    expectedState.graph.nodeOrder.push(uuid)
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("enter key down when finder is shown and finder has search closes finder and adds node", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = openFinder(initialState(generateUUID0))
    for (const key of 'add') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.KEYDOWN,
            key
        })
        state = nextState
    }
    const { state: nextState } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Enter'
    })
    state = nextState
    const expectedState = initialState(generateUUID1)
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    const uuid = generateUUID1()
    expectedState.graph.nodes[uuid] = {
        uuid,
        name: "Add",
        inputs: [
            { name: "x", selected: false, edgeUUIDs: [] },
            { name: "y", selected: false, edgeUUIDs: [] }
        ],
        outputs: [
            { name: "out", selected: false, edgeUUIDs: [] }
        ],
        x: 0,
        y: 0
    }
    expectedState.graph.nodeOrder.push(uuid)
    expect(state).toEqual(expectedState)
})

test("enter key down when finder is shown and finder has search eliminates all options closes finder", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = openFinder(initialState(generateUUID0))
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'x'
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.KEYDOWN,
        key: 'Enter'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state2).toEqual(expectedState)
})


test("ret virtual key down when finder is shown and finder has search eliminates all options closes finder", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = openFinder(initialState(generateUUID0))
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'x'
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'ret'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state2).toEqual(expectedState)
})


test("escape key down when finder is shown closes finder", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Escape'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("shift key down when finder is shown are ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Shift'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("alt key down when finder is shown are ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Alt'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("control key down when finder is shown are ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Control'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("meta key down when finder is shown are ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Meta'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("Tab key down when finder is shown are ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    state.finder.show = true
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Tab'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("virtual key down when finder is shown appends to search", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'a'
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'd'
    })
    const { state: state3, render } = update(generateUUID0, state2, {
        kind: EventKind.KEYDOWN,
        key: 'd'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.finder.search = 'add'
    expectedState.finder.options = ['Add']
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expect(state3).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("del virtual key down when finder is shown deletes from search", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'a'
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'd'
    })
    const { state: state3 } = update(generateUUID0, state2, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'd'
    })
    const { state: state4, render } = update(generateUUID0, state3, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'del'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.finder.search = 'ad'
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = ['Add']
    expect(state4).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("space virtual key down when finder is shown adds space to search", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'a'
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'space'
    })
    const { state: state3, render } = update(generateUUID0, state2, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'd'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.finder.search = 'a d'
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expect(state3).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("ret virtual key down when finder is shown closes finder", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'ret'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    const uuid = generateUUID1()
    expectedState.graph.nodes[uuid] = {
        uuid,
        name: "Number",
        inputs: [],
        body: {
            value: 0,
            editing: false,
        },
        outputs: [
            { name: "out", selected: false, edgeUUIDs: [] }
        ],
        x: 0,
        y: 0
    }
    expectedState.graph.nodeOrder.push(uuid)
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("sft virtual key down when finder is shown are ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = openFinder(initialState(generateUUID0))
    const { state: state1, render } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'sft'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.finder.show = true
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.ALPHABETIC
    }
    expectedState.inputTarget.kind = InputTargetKind.FINDER
    expectedState.finder.options = [
        "Number", "Add", "Subtract", "Multiply", "Divide", "Equal", "Less Than", "Log"
    ]
    expect(state1).toEqual(expectedState)
    expect(render).toEqual(true)
})

test("pressing number on keyboard appends to number node", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of '1234567890') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.KEYDOWN,
            key
        })
        state = nextState
    }
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expectedState.graph.nodes[nodeUUID].body!.value = 151234567890
    expect(state).toEqual(expectedState)
})

test("pressing backspace on keyboard deletes from number node", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of '1234567890') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.KEYDOWN,
            key
        })
        state = nextState
    }
    const { state: nextState } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Backspace'
    })
    state = nextState
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expectedState.graph.nodes[nodeUUID].body!.value = 15123456789
    expect(state).toEqual(expectedState)
})

test("pressing backspace when number node value is 0 has no effect", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (let i = 0; i < 3; ++i) {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.KEYDOWN,
            key: 'Backspace'
        })
        state = nextState
    }
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expectedState.graph.nodes[nodeUUID].body!.value = 0
    expect(state).toEqual(expectedState)
})

test("pressing del on virtual keyboard when number node value is 0 has no effect", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (let i = 0; i < 3; ++i) {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.VIRTUAL_KEYDOWN,
            key: 'del'
        })
        state = nextState
    }
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expectedState.graph.nodes[nodeUUID].body!.value = 0
    expect(state).toEqual(expectedState)
})

test("pressing number on virtual keyboard appends to number node", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of '1234567890') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.VIRTUAL_KEYDOWN,
            key
        })
        state = nextState
    }
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expectedState.graph.nodes[nodeUUID].body!.value = 151234567890
    expect(state).toEqual(expectedState)
})

test("pressing del on virtual keyboard deletes from number node", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of '1234567890') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.VIRTUAL_KEYDOWN,
            key
        })
        state = nextState
    }
    const { state: nextState } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'del'
    })
    state = nextState
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expectedState.graph.nodes[nodeUUID].body!.value = 15123456789
    expect(state).toEqual(expectedState)
})


test("pressing enter on keyboard while editing number node exits virtual keyboard", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of '1234567890') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.KEYDOWN,
            key
        })
        state = nextState
    }
    const { state: nextState } = update(generateUUID0, state, {
        kind: EventKind.KEYDOWN,
        key: 'Enter'
    })
    state = nextState
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodes[nodeUUID].body!.value = 151234567890
    expect(state).toEqual(expectedState)
})

test("pressing ret on virtual keyboard while editing number node exits virtual keyboard", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of '1234567890') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.VIRTUAL_KEYDOWN,
            key
        })
        state = nextState
    }
    const { state: nextState } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: 'ret'
    })
    state = nextState
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodes[nodeUUID].body!.value = 151234567890
    expect(state).toEqual(expectedState)
})


test("pressing non number on keyboard while editing number node is ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of 'qwertyuiopasdfghjklzxcvbnm') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.KEYDOWN,
            key
        })
        state = nextState
    }
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expect(state).toEqual(expectedState)
})


test("pressing non number on virtual keyboard while editing number node is ignored", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    state = openNumericKeyboard(state, nodeUUID)
    for (const key of 'qwertyuiopasdfghjklzxcvbnm') {
        const { state: nextState } = update(generateUUID0, state, {
            kind: EventKind.VIRTUAL_KEYDOWN,
            key
        })
        state = nextState
    }
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expect(state).toEqual(expectedState)
})

test("pressing a key on virtual keyboard while no input target selected doesn't change the state", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    state.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.VIRTUAL_KEYDOWN,
        key: '1'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expect(state1).toEqual(expectedState)
})

test("clicking a number node opens the numeric keyboard", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const nodeUUID = state.graph.nodeOrder[3]
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_NUMBER,
        nodeUUID
    })
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID
    }
    expectedState.graph.nodes[nodeUUID].body!.editing = true
    expectedState.graph.nodes[nodeUUID].body!.value = 15
    expect(state1).toEqual(expectedState)
})

test("clicking a number node when another number node is selected switches selections", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    let state = initialState(generateUUID0)
    const [a, b] = state.graph.nodeOrder
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_NUMBER,
        nodeUUID: a
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_NUMBER,
        nodeUUID: b
    })
    const expectedState = initialState(generateUUID1)
    expectedState.virtualKeyboard = {
        show: true,
        kind: VirtualKeyboardKind.NUMERIC
    }
    expectedState.inputTarget = {
        kind: InputTargetKind.NUMBER,
        nodeUUID: b
    }
    expectedState.graph.nodes[b].body!.editing = true
    expectedState.graph.nodes[b].body!.value = 10
    expect(state2).toEqual(expectedState)
})

test("clicking background when a number node is selected deselects it", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_NUMBER,
        nodeUUID: state.graph.nodeOrder[3]
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_BACKGROUND,
    })
    const expectedState = initialState(generateUUID1)
    expect(state2).toEqual(expectedState)
})

test("zooming", () => {
    const generateUUID0 = generateUUID()
    const state = initialState(generateUUID0)
    const pointer0 = {
        x: 0,
        y: 0,
        id: 0,
    }
    const pointer1 = {
        x: 10,
        y: 10,
        id: 1,
    }
    const pointer2 = {
        x: 20,
        y: 20,
        id: 1,
    }
    const pointer3 = {
        x: 30,
        y: 30,
        id: 1,
    }
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.POINTER_DOWN,
        pointer: pointer0
    })
    {
        const expectedState = initialState(generateUUID())
        expectedState.dragging = true
        expectedState.potentialDoubleClick = true
        expectedState.pointers = [pointer0]
        expect(state1).toEqual(expectedState)
    }
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.POINTER_DOWN,
        pointer: pointer1
    })
    {
        const expectedState = initialState(generateUUID())
        expectedState.zooming = true
        expectedState.pointers = [pointer0, pointer1]
        expect(state2).toEqual(expectedState)
    }
    const { state: state3 } = update(generateUUID0, state2, {
        kind: EventKind.POINTER_MOVE,
        pointer: pointer2
    })
    {
        const expectedState = initialState(generateUUID())
        expectedState.zooming = true
        expectedState.pointerDistance = Math.sqrt(Math.pow(20, 2) + Math.pow(20, 2))
        expectedState.pointerCenter = [10, 10]
        expectedState.pointers = [pointer0, pointer2]
        expect(state3).toEqual(expectedState)
    }
    const { state: state4 } = update(generateUUID0, state3, {
        kind: EventKind.POINTER_MOVE,
        pointer: pointer3
    })
    {
        const expectedState = initialState(generateUUID())
        expectedState.zooming = true
        expectedState.pointerDistance = Math.sqrt(Math.pow(30, 2) + Math.pow(30, 2))
        expectedState.pointerCenter = [15, 15]
        expectedState.pointers = [pointer0, pointer3]
        expectedState.camera = [
            0.906625499506728, 0, -3.13250999013456,
            0, 0.906625499506728, -3.13250999013456,
            0, 0, 1,
        ]
        expect(state4).toEqual(expectedState)
    }
})

test("pressing d on keyboard with node selected deletes it", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const [a, b, c, d, e, f] = state.graph.nodeOrder
    const edgeUUIDs = state.graph.nodes[a].outputs[0].edgeUUIDs
    expect(edgeUUIDs.length).toEqual(1)
    const edgeUUID = edgeUUIDs[0]
    const edge = state.graph.edges[edgeUUID]
    expect(edge.input.nodeUUID).toEqual(c)
    expect(edge.input.inputIndex).toEqual(0)
    expect(state.graph.nodes[c].inputs[0].edgeUUIDs.length).toEqual(1)
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_NODE,
        nodeUUID: a
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.KEYDOWN,
        key: 'd'
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodeOrder = [b, c, d, e, f]
    delete expectedState.graph.nodes[a]
    delete expectedState.graph.edges[edgeUUID]
    expectedState.graph.nodes[c].inputs[0].edgeUUIDs = []
    expect(state2).toEqual(expectedState)
})

test("clicking background when a node is selected deselects it", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const [a, b, c, d, e, f] = state.graph.nodeOrder
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_NODE,
        nodeUUID: a
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_BACKGROUND,
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodeOrder = [b, c, d, e, f, a]
    expect(state2).toEqual(expectedState)
})


test("clicking background when a input is selected deselects it", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const [a, b, c, d, e, f] = state.graph.nodeOrder
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_INPUT,
        inputPath: {
            nodeUUID: c,
            inputIndex: 0
        }
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_BACKGROUND,
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodeOrder = [a, b, d, e, f, c]
    expect(state2).toEqual(expectedState)
})

test("clicking background when a output is selected deselects it", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const state = initialState(generateUUID0)
    const [a, b, c, d, e, f] = state.graph.nodeOrder
    const { state: state1 } = update(generateUUID0, state, {
        kind: EventKind.CLICKED_OUTPUT,
        outputPath: {
            nodeUUID: c,
            outputIndex: 0
        }
    })
    const { state: state2 } = update(generateUUID0, state1, {
        kind: EventKind.CLICKED_BACKGROUND,
    })
    const expectedState = initialState(generateUUID1)
    expectedState.graph.nodeOrder = [a, b, d, e, f, c]
    expect(state2).toEqual(expectedState)
})

*/