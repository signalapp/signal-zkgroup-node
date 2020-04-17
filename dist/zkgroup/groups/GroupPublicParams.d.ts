import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import GroupIdentifier from './GroupIdentifier';
export default class GroupPublicParams extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getGroupIdentifier(): GroupIdentifier;
}
