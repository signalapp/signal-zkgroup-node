import ByteArray from "../internal/ByteArray";
import { FFICompatArrayType } from "../internal/FFICompatArray";
export default class ReceiptSerial extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
}
