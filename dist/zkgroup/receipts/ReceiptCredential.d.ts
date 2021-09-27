import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
export default class ReceiptCredential extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getReceiptExpirationTime(): string | number;
    getReceiptLevel(): string | number;
}
