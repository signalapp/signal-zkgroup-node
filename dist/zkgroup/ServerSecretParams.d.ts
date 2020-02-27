import { FFICompatArrayType } from './internal/FFICompatArray';
import ByteArray from './internal/ByteArray';
import ServerPublicParams from './ServerPublicParams';
import NotarySignature from './NotarySignature';
export default class ServerSecretParams extends ByteArray {
    static SIZE: number;
    static generate(): ServerSecretParams;
    static generateWithRandom(random: FFICompatArrayType): ServerSecretParams;
    constructor(contents: FFICompatArrayType);
    getPublicParams(): ServerPublicParams;
    sign(message: FFICompatArrayType): NotarySignature;
    signWithRandom(random: FFICompatArrayType, message: FFICompatArrayType): NotarySignature;
    serialize(): FFICompatArrayType;
}
