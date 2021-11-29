export function resizeElement(element: any, percentage: number, props: Array<string> = [], values: Array<number> = []): void {
    // console.log({ element, percentage, props, values });
    props.forEach((key, idx) => {
        element.style[key] = values[idx] * percentage + "px";
    });
}

export function getNumber(value: string): number {
    return Number(value.replace("px", ""))
}

// Common global functions
// HEX to RGBA
export function hexToRGBa(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const a = alpha || 1;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
