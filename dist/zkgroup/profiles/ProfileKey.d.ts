import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import ProfileKeyCommitment from './ProfileKeyCommitment';
import ProfileKeyVersion from './ProfileKeyVersion';
export default class ProfileKey extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getCommitment(): ProfileKeyCommitment;
    getProfileKeyVersion(): ProfileKeyVersion;
}
