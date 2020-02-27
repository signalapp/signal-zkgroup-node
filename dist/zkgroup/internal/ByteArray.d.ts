import { FFICompatArrayType } from './FFICompatArray';
export default class ByteArray {
    contents: FFICompatArrayType;
    constructor(contents: FFICompatArrayType, expectedLength: number, unrecoverable: boolean);
    getContents(): FFICompatArrayType;
    serialize(): FFICompatArrayType;
}
