
export namespace Color {
    export function green (str: string) {
        return (str as any).green;
    }
    export function colorize (str: string) {
        return (str as any).color;
    }
    export function bg_cyan (str: string) {
        return (str as any).bg_cyan;
    }
}