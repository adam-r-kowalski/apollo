import { emptyGraph, Input, Node, Output, addNode } from "../src/graph"

const generateUUID = () => {
    let i = 0
    return () => {
        const uuid = i.toString()
        ++i
        return uuid
    }
}


test("empty graph", () => {
    expect(emptyGraph()).toEqual({
        nodes: {},
        edges: {},
        inputs: {},
        bodys: {},
        outputs: {},
    })
})

test("add operation to graph", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const graph = emptyGraph()
    const { graph: graph1, node } = addNode({
        graph,
        operation: {
            name: 'Add',
            inputs: ['x', 'y'],
            outputs: ['out'],
        },
        position: { x: 0, y: 0 },
        generateUUID: generateUUID0
    })
    expect(graph).toEqual(emptyGraph())
    const addUUID = generateUUID1()
    const xUUID = generateUUID1()
    const yUUID = generateUUID1()
    const outUUID = generateUUID1()
    const add: Node = {
        uuid: addUUID,
        name: 'Add',
        inputs: [xUUID, yUUID],
        outputs: [outUUID],
        position: { x: 0, y: 0 },
    }
    const x: Input = {
        uuid: xUUID,
        name: 'x'
    }
    const y: Input = {
        uuid: yUUID,
        name: 'y'
    }
    const out: Output = {
        uuid: outUUID,
        name: 'out',
        edges: []
    }
    expect(graph1).toEqual({
        nodes: {
            [add.uuid]: add
        },
        edges: {},
        inputs: {
            [x.uuid]: x,
            [y.uuid]: y,
        },
        bodys: {},
        outputs: {
            [out.uuid]: out
        },
    })
    expect(node).toEqual(add.uuid)
})

test("add two operations to graph", () => {
    const generateUUID0 = generateUUID()
    const generateUUID1 = generateUUID()
    const graph = emptyGraph()
    const { graph: graph1, node: actualAddUUID } = addNode({
        graph,
        operation: {
            name: 'Add',
            inputs: ['x', 'y'],
            outputs: ['out'],
        },
        position: { x: 0, y: 0 },
        generateUUID: generateUUID0
    })
    const { graph: graph2, node: actualLogUUID } = addNode({
        graph: graph1,
        operation: {
            name: 'Log To Console',
            inputs: ['value'],
            outputs: [],
        },
        position: { x: 50, y: 50 },
        generateUUID: generateUUID0
    })
    expect(graph).toEqual(emptyGraph())
    const addUUID = generateUUID1()
    const xUUID = generateUUID1()
    const yUUID = generateUUID1()
    const outUUID = generateUUID1()
    const add: Node = {
        uuid: addUUID,
        name: 'Add',
        inputs: [xUUID, yUUID],
        outputs: [outUUID],
        position: { x: 0, y: 0 },
    }
    const x: Input = {
        uuid: xUUID,
        name: 'x'
    }
    const y: Input = {
        uuid: yUUID,
        name: 'y'
    }
    const out: Output = {
        uuid: outUUID,
        name: 'out',
        edges: []
    }
    const logUUID = generateUUID1()
    const valueUUID = generateUUID1()
    const log: Node = {
        uuid: logUUID,
        name: 'Log To Console',
        inputs: [valueUUID],
        outputs: [],
        position: { x: 50, y: 50 }
    }
    const value: Input = {
        uuid: valueUUID,
        name: 'value'
    }
    expect(graph1).toEqual({
        nodes: {
            [add.uuid]: add
        },
        edges: {},
        inputs: {
            [x.uuid]: x,
            [y.uuid]: y,
        },
        bodys: {},
        outputs: {
            [out.uuid]: out
        },
    })
    expect(actualAddUUID).toEqual(add.uuid)
    expect(graph2).toEqual({
        nodes: {
            [add.uuid]: add,
            [log.uuid]: log
        },
        edges: {},
        inputs: {
            [x.uuid]: x,
            [y.uuid]: y,
            [value.uuid]: value,
        },
        bodys: {},
        outputs: {
            [out.uuid]: out
        },
    })
    expect(actualLogUUID).toEqual(log.uuid)
})