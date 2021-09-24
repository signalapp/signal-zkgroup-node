import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import ReceiptCredentialRequest from "./ReceiptCredentialRequest";
export default class ReceiptCredentialRequestContext extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getRequest(): ReceiptCredentialRequest;
}
