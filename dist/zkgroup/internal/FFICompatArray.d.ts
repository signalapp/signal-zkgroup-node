import ArrayType = require('ref-array-napi');
declare const FFICompatArray: ArrayType<number>;
export default FFICompatArray;
export declare type FFICompatArrayType = ReturnType<typeof FFICompatArray>;
