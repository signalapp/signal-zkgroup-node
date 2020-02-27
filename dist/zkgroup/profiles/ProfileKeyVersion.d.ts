import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
export default class ProfileKeyVersion extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType | string);
    toString(): string;
}
