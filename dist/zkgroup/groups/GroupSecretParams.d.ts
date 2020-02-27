import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import ChangeSignature from './ChangeSignature';
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
    sign(message: FFICompatArrayType): ChangeSignature;
    signWithRandom(random: FFICompatArrayType, message: FFICompatArrayType): ChangeSignature;
}
