import { FFICompatArrayType } from '../internal/FFICompatArray';
import ByteArray from '../internal/ByteArray';
export default class ChangeSignature extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
}
