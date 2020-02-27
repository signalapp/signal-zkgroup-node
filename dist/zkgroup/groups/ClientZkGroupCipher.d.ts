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
    encryptProfileKey(profileKey: ProfileKey): ProfileKeyCiphertext;
    encryptProfileKeyWithRandom(random: FFICompatArrayType, profileKey: ProfileKey): ProfileKeyCiphertext;
    decryptProfileKey(profileKeyCiphertext: ProfileKeyCiphertext): ProfileKey;
    encryptBlob(plaintext: FFICompatArrayType): FFICompatArrayType;
    decryptBlob(blobCiphertext: FFICompatArrayType): FFICompatArrayType;
}
