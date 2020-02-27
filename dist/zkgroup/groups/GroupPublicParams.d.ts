import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import GroupIdentifier from './GroupIdentifier';
import ChangeSignature from './ChangeSignature';
export default class GroupPublicParams extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getGroupIdentifier(): GroupIdentifier;
    verifySignature(message: FFICompatArrayType, changeSignature: ChangeSignature): void;
}
