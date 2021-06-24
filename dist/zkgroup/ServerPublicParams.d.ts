import ByteArray from './internal/ByteArray';
import NotarySignature from './NotarySignature';
import { FFICompatArrayType } from './internal/FFICompatArray';
export default class ServerPublicParams extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    verifySignature(message: FFICompatArrayType, notarySignature: NotarySignature): void;
    serialize(): FFICompatArrayType;
}
