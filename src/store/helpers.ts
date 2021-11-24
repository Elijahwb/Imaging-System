export function resizeElement(element: any, percentage: number, props: Array<string> = [], values: Array<number> = []): void {
    // console.log({ element, percentage, props, values });
    props.forEach((key, idx) => {
        element.style[key] = values[idx] * percentage + "px";
    });
}

export function getNumber(value: string): number {
    return Number(value.replace("px", ""))
}