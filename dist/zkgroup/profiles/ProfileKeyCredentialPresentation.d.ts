import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import UuidCiphertext from '../groups/UuidCiphertext';
import ProfileKeyCiphertext from '../groups/ProfileKeyCiphertext';
export default class ProfileKeyCredentialPresentation extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getUuidCiphertext(): UuidCiphertext;
    getProfileKeyCiphertext(): ProfileKeyCiphertext;
}
