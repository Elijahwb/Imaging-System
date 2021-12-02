export interface Photo {
    url: string
    name?: string
    created_at: string,
    type: "Pano" | "Graph" | "IO Sensor" | "IO Camera" | "Photo" | "Capture"
}

export interface EditorDimensions {
    oldWidth: number,
    oldHeight: number,
    newWidth: number,
    newHeight: number,
}

export enum FilterType {
    grayscale = 'Grayscale',
    invert = 'Invert',
    sepia = 'Sepia',
    vintage = 'vintage',
    blur = 'Blur',
    sharpen = 'Sharpen',
    emboss = 'Emboss',
    removeColor = 'removeColor',
    brightness = 'brightness',
    noise = 'noise',
    pixelate = 'pixelate',
    blendColor = 'blendColor',
    mask = 'mask',
}

export interface IColor {
    name: string
    value: string
}

export enum Colors {
    red = '#FF0000',
    darkRed = '#8B0000',
    pink = '#FFC0CB',
    hotPink = '#FF69B4',
    orange = '#FFA500',
    yellow = '#FFFF00',
    gold = '#FFD700',
    darkKhaki = '#BDB76B',
    indigo = '#4B0082',
    blueViolet = '#8A2BE2',
    green = '#008000',
    olive = '#808000',
    teal = '#008080',
    cadeBlue = '#5F9EA0',
    blue = '#0000FF',
    naveBlue = '#000080',
    rosyBrown = '#BC8F8F',
    peru = '#CD853F',
    brown = '#A52A2A',
    white = '#FFFFFF',
    gray = '#808080',
    black = '#000000',
}

export const ColorsTypes: Array<IColor> = [
    { name: "Black", value: '#000000' },
    { name: "Red", value: '#FF0000' },
    { name: "DarkRed", value: '#8B0000' },
    { name: "Pink", value: '#FFC0CB' },
    { name: "HotPink", value: '#FF69B4' },
    { name: "Orange", value: '#FFA500' },
    { name: "Yellow", value: '#FFFF00' },
    { name: "Gold", value: '#FFD700' },
    { name: "DarkKhaki", value: '#BDB76B' },
    { name: "Indigo", value: '#4B0082' },
    { name: "BlueViolet", value: '#8A2BE2' },
    { name: "Green", value: '#008000' },
    { name: "Olive", value: '#808000' },
    { name: "Teal", value: '#008080' },
    { name: "CadeBlue", value: '#5F9EA0' },
    { name: "Blue", value: '#0000FF' },
    { name: "NaveBlue", value: '#000080' },
    { name: "RosyBrown", value: '#BC8F8F' },
    { name: "Peru", value: '#CD853F' },
    { name: "Brown", value: '#A52A2A' },
    { name: "White", value: '#FFFFFF' },
    { name: "Gray", value: '#808080' },
]

export type EditType = 'text' | 'crop' | 'line_drawing' | 'free_drawing' | 'shape'

export interface TextStyle {
    fill?: string,
    fontSize?: number,
    fontWeight?: "normal" | "bold" | undefined,
    fontStyle?: "normal" | "italic",
    textDecoration?: "underline" | "line-through" | "overline" | undefined,
    textAlign?: "center" | "right" | "left"
}

export interface Text {
    text: string,
    styles: TextStyle,
    position: {
        x: number,
        y: number
    }
}

export interface ShapeStyle {
    fill?: {
        type?: "color" | "filter",
        color?: string,
        filter?: Array<Record<string, unknown>>
    },
    stroke?: string,
    strokeWidth?: number,
    width?: number,
    height?: number,
    rx?: number,
    ry?: number,
    left?: number,
    top?: number
    isRegular?: boolean
}

export interface Shape {
    type: "rect" | "circle" | "triangle",
    options: ShapeStyle
}