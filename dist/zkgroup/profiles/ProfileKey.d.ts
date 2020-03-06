import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import ProfileKeyCommitment from './ProfileKeyCommitment';
import ProfileKeyVersion from './ProfileKeyVersion';
import { UUIDType } from '../internal/UUIDUtil';
export default class ProfileKey extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getCommitment(uuid: UUIDType): ProfileKeyCommitment;
    getProfileKeyVersion(uuid: UUIDType): ProfileKeyVersion;
}
