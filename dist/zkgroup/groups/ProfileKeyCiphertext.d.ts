import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
export default class ProfileKeyCiphertext extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
}
