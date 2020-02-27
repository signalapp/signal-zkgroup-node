import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import UuidCiphertext from '../groups/UuidCiphertext';
export default class AuthCredentialPresentation extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getUuidCiphertext(): UuidCiphertext;
    getRedemptionTime(): number;
}
