import { CameraStack } from '../src/camera_stack'
import { mockDocument, mockWindow } from '../src/renderer/mock'
import { webGL2Renderer } from '../src/renderer/webgl2'
import { text, textGeometry, textLayout } from '../src/ui/text'

const mockRenderer = () => webGL2Renderer({
    width: 500,
    height: 500,
    document: mockDocument(),
    window: mockWindow()
})

test("text layout", () => {
    const renderer = mockRenderer()
    const ui = text("abc")
    const constraints = { minWidth: 0, maxWidth: 100, minHeight: 0, maxHeight: 100 }
    const layout = ui.layout(constraints, renderer.measureText)
    const measurements = {
        widths: [24, 24, 24],
        textureIndex: 1,
        textureCoordinates: [
            [
                0.0625,
                0.375,
                0.0625,
                0.421875,
                0.109375,
                0.375,
                0.109375,
                0.421875,
            ], [
                0.125,
                0.375,
                0.125,
                0.421875,
                0.171875,
                0.375,
                0.171875,
                0.421875,
            ], [
                0.1875,
                0.375,
                0.1875,
                0.421875,
                0.234375,
                0.375,
                0.234375,
                0.421875,
            ]
        ]
    }
    const expectedLayout = textLayout(measurements, { width: 24 * 3, height: 24 })
    expect(layout).toEqual(expectedLayout)
})

test("text geometry", () => {
    const renderer = mockRenderer()
    const ui = text("abc")
    const constraints = { minWidth: 0, maxWidth: 100, minHeight: 0, maxHeight: 100 }
    const layout = ui.layout(constraints, renderer.measureText)
    const offset = { x: 0, y: 0 }
    const geometry = ui.geometry(layout, offset, new CameraStack())
    const expectedGeometry = textGeometry({
        worldSpace: { x0: 0, y0: 0, x1: 24 * 3, y1: 24 },
        textureIndex: 1,
        textureCoordinates: [
            0.0625,
            0.375,
            0.0625,
            0.421875,
            0.109375,
            0.375,
            0.109375,
            0.421875,

            0.125,
            0.375,
            0.125,
            0.421875,
            0.171875,
            0.375,
            0.171875,
            0.421875,

            0.1875,
            0.375,
            0.1875,
            0.421875,
            0.234375,
            0.375,
            0.234375,
            0.421875,
        ],
        colors: [
            255, 255, 255, 255,
            255, 255, 255, 255,
            255, 255, 255, 255,
            255, 255, 255, 255,

            255, 255, 255, 255,
            255, 255, 255, 255,
            255, 255, 255, 255,
            255, 255, 255, 255,

            255, 255, 255, 255,
            255, 255, 255, 255,
            255, 255, 255, 255,
            255, 255, 255, 255,
        ],
        vertices: [
            0, 0,
            0, 24,
            24, 0,
            24, 24,

            24, 0,
            24, 24,
            24 * 2, 0,
            24 * 2, 24,

            24 * 2, 0,
            24 * 2, 24,
            24 * 3, 0,
            24 * 3, 24,
        ],
        vertexIndices: [
            0, 1, 2,
            1, 2, 3,

            4, 5, 6,
            5, 6, 7,

            8, 9, 10,
            9, 10, 11,
        ],
        cameraIndex: Array(12).fill(0)
    })
    expect(geometry).toEqual(expectedGeometry)
})