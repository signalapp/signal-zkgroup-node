import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import GroupMasterKey from './GroupMasterKey';
import GroupPublicParams from './GroupPublicParams';
export default class GroupSecretParams extends ByteArray {
    static SIZE: number;
    static generate(): GroupSecretParams;
    static generateWithRandom(random: FFICompatArrayType): GroupSecretParams;
    static deriveFromMasterKey(groupMasterKey: GroupMasterKey): GroupSecretParams;
    constructor(contents: FFICompatArrayType);
    getMasterKey(): GroupMasterKey;
    getPublicParams(): GroupPublicParams;
}
