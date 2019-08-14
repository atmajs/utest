export namespace Console {
    export function log (...args) {
        console.log(...args);
    }
    export function error (...args) {
        console.error(...args);
    }
    export function warn (...args) {
        console.warn(...args);
    }
    export function print (...args) {
        (console as any).print(...args);
    }
    
}