import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import ProfileKeyVersion from './ProfileKeyVersion';
export default class ProfileKeyCommitment extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getProfileKeyVersion(): ProfileKeyVersion;
}
