export type UUID = string

export type GenerateUUID = () => UUID

export interface Input {
    readonly uuid: UUID
    readonly name: string
    readonly edge?: UUID
}

export interface Output {
    readonly uuid: UUID
    readonly name: string
    readonly edges: Readonly<UUID[]>
}

export interface Body {
    readonly uuid: UUID
    readonly value: number
}

export interface Position {
    readonly x: number
    readonly y: number
}

export interface Node {
    readonly uuid: UUID
    readonly name: string
    readonly inputs: Readonly<UUID[]>
    readonly body?: UUID
    readonly outputs: Readonly<UUID[]>
    readonly position: Position
}

export interface Edge {
    readonly uuid: UUID
    readonly input: UUID
    readonly output: UUID
}

export type Nodes = { [uuid: UUID]: Node }
export type Edges = { [uuid: UUID]: Edge }
export type Inputs = { [uuid: UUID]: Input }
export type Bodys = { [uuid: UUID]: Body }
export type Outputs = { [uuid: UUID]: Output }

export interface Graph {
    readonly nodes: Readonly<Nodes>
    readonly edges: Readonly<Edges>
    readonly inputs: Readonly<Inputs>
    readonly bodys: Readonly<Bodys>
    readonly outputs: Readonly<Outputs>
}

export interface Operation {
    readonly name: string
    readonly inputs: Readonly<string[]>
    readonly body?: number
    readonly outputs: Readonly<string[]>
}


export const emptyGraph = (): Graph => ({
    nodes: {},
    edges: {},
    inputs: {},
    bodys: {},
    outputs: {},
})

interface AddNodeInputs {
    graph: Graph
    operation: Operation
    position: Position
    generateUUID: GenerateUUID
}

interface AddNodeOutputs {
    graph: Graph
    node: UUID
}

export const addNode = ({ graph, operation, position, generateUUID }: AddNodeInputs): AddNodeOutputs => {
    const nodeUUID = generateUUID()
    const inputs: Inputs = { ...graph.inputs }
    const inputUUIDs = []
    for (const name of operation.inputs) {
        const uuid = generateUUID()
        inputs[uuid] = {
            uuid,
            name
        }
        inputUUIDs.push(uuid)
    }
    const outputs: Outputs = { ...graph.outputs }
    const outputUUIDs = []
    for (const name of operation.outputs) {
        const uuid = generateUUID()
        outputs[uuid] = {
            uuid,
            name,
            edges: []
        }
        outputUUIDs.push(uuid)
    }
    const nodes: Nodes = {
        ...graph.nodes,
        [nodeUUID]: {
            uuid: nodeUUID,
            name: operation.name,
            inputs: inputUUIDs,
            outputs: outputUUIDs,
            position
        }
    }
    return {
        graph: {
            ...graph,
            nodes,
            inputs,
            outputs
        },
        node: nodeUUID
    }
}