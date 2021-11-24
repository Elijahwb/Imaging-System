export interface Photo {
    url: string
    name?: string
    created_at: string,
    type: string
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