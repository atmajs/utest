declare var global;

const g = typeof global !== 'undefined' ? global : window;
export const _Array_slice = Array.prototype.slice;
export const mask = g.mask;
export const include = g.include;
export const logger = g.logger;
export const atma = g.atma;
export const io = g.io;
export const app = g.app;
export const assert = g.assert;

export { g as global };
	
	
(RegExp.prototype as any).toJSON = RegExp.prototype.toString;
