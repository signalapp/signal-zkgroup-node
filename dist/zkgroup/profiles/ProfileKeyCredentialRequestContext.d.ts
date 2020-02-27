import ByteArray from '../internal/ByteArray';
import { FFICompatArrayType } from '../internal/FFICompatArray';
import ProfileKeyCredentialRequest from './ProfileKeyCredentialRequest';
export default class ProfileKeyCredentialRequestContext extends ByteArray {
    static SIZE: number;
    constructor(contents: FFICompatArrayType);
    getRequest(): ProfileKeyCredentialRequest;
}
