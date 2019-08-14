export function color (arr: TemplateStringsArray, ...values: any[]) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < values.length) {
            str += values[i];
        }
    }    
    let result: string = (str as any).color;
    return result;
};
