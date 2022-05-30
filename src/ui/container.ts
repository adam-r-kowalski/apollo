import {
    Layout,
    Constraints,
    Geometry,
    Size,
    Child,
    Offset,
    Hsla,
    Color,
    Vertices,
    TextureCoordinates,
    Colors,
    VertexIndices,
    Padding
} from "../components";
import { ECS, Entity } from "../ecs";
import { Layers } from "../layers";

const layout = (self: Entity, constraints: Constraints) => {
    const child = self.get(Child)!.entity
    const padding = self.get(Padding)!.value
    const childSize = child.get(Layout)!.layout(child, constraints)
    const size = new Size(
        Math.min(constraints.maxWidth, childSize.width + 2 * padding),
        Math.min(constraints.maxHeight, childSize.height + 2 * padding),
    )
    child.update(Offset, offset => {
        offset.x = padding
        offset.y = padding
    })
    self.set(constraints, size, new Offset(0, 0))
    return size
}

const geometry = (self: Entity, parentOffset: Offset, layers: Layers, z: number) => {
    const offset = parentOffset.add(self.get(Offset)!)
    const { width, height } = self.get(Size)!
    const x0 = offset.x
    const x1 = x0 + width
    const y0 = offset.y
    const y1 = y0 + height
    const { h, s, l, a } = self.get(Color)!
    self.set(
        new Vertices([
            x0, y0,
            x0, y1,
            x1, y0,
            x1, y1,
        ]),
        new TextureCoordinates([
            0, 0,
            0, 0,
            0, 0,
            0, 0,
        ]),
        new Colors([
            h, s, l, a,
            h, s, l, a,
            h, s, l, a,
            h, s, l, a,
        ]),
        new VertexIndices([
            0, 1, 2,
            1, 2, 3,
        ])
    )
    layers.push({ z, texture: 0, entity: self })
    const child = self.get(Child)!.entity
    child.get(Geometry)!.geometry(child, offset, layers, z)
}

interface Properties {
    color: Hsla
    padding?: number
}

export const container = (ecs: ECS, properties: Properties, child: Entity) =>
    ecs.entity(
        new Layout(layout),
        new Geometry(geometry),
        new Child(child),
        new Color(properties.color),
        new Padding(properties.padding ?? 0)
    )