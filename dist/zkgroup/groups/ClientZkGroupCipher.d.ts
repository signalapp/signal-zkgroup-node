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
    encryptProfileKeyWithRandom(random: FFICompatArrayType, profileKey: ProfileKey, uuid: UUIDType): ProfileKeyCiphertext;
    decryptProfileKey(profileKeyCiphertext: ProfileKeyCiphertext, uuid: UUIDType): ProfileKey;
    encryptBlob(plaintext: FFICompatArrayType): FFICompatArrayType;
    encryptBlobWithRandom(random: FFICompatArrayType, plaintext: FFICompatArrayType): FFICompatArrayType;
    decryptBlob(blobCiphertext: FFICompatArrayType): FFICompatArrayType;
}
