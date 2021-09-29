import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import ReceiptSerial from "./ReceiptSerial";
export default class ReceiptCredentialPresentation extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getReceiptExpirationTime(): string | number;
    getReceiptLevel(): string | number;
    getReceiptSerialBytes(): ReceiptSerial;
}
