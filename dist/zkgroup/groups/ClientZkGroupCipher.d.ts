import { FFICompatArrayType } from '../internal/FFICompatArray';
import UuidCiphertext from './UuidCiphertext';
import ProfileKeyCiphertext from './ProfileKeyCiphertext';
import ProfileKey from '../profiles/ProfileKey';
import GroupSecretParams from './GroupSecretParams';
import { UUIDType } from '../internal/UUIDUtil';
export default class ClientZkGroupCipher {
    groupSecretParams: GroupSecretParams;
    constructor(groupSecretParams: GroupSecretParams);
    encryptUuid(uuid: UUIDType): UuidCiphertext;
    decryptUuid(uuidCiphertext: UuidCiphertext): UUIDType;
    encryptProfileKey(profileKey: ProfileKey, uuid: UUIDType): ProfileKeyCiphertext;
    decryptProfileKey(profileKeyCiphertext: ProfileKeyCiphertext, uuid: UUIDType): ProfileKey;
    myArrayCopy(src: FFICompatArrayType, srcStart: number, dst: FFICompatArrayType, dstStart: number, len: number): void;
    encryptBlob(plaintext: FFICompatArrayType): FFICompatArrayType;
    encryptBlobWithRandom(random: FFICompatArrayType, plaintext: FFICompatArrayType): FFICompatArrayType;
    decryptBlob(blobCiphertext: FFICompatArrayType): FFICompatArrayType;
}
