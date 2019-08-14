declare var global;

const g = typeof global !== 'undefined' ? global : window;
export const _Array_slice = Array.prototype.slice;
export const mask = global.mask;
export const include = global.include;
export const logger = global.logger;
export const atma = global.atma;
export const io = global.io;
export const app = global.app;
export const assert = global.assert;

export { g as global };
	
	
(RegExp.prototype as any).toJSON = RegExp.prototype.toString;
