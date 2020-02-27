"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const FFICompatArray_1 = require("../internal/FFICompatArray");
const ZkGroupError_1 = require("../errors/ZkGroupError");
const VerificationFailedException_1 = require("../errors/VerificationFailedException");
const Constants_1 = require("../internal/Constants");
const Native_1 = require("../internal/Native");
const UuidCiphertext_1 = require("./UuidCiphertext");
const ProfileKeyCiphertext_1 = require("./ProfileKeyCiphertext");
const ProfileKey_1 = require("../profiles/ProfileKey");
const UUIDUtil_1 = require("../internal/UUIDUtil");
class ClientZkGroupCipher {
    constructor(groupSecretParams) {
        this.groupSecretParams = groupSecretParams;
    }
    encryptUuid(uuid) {
        const newContents = new FFICompatArray_1.default(UuidCiphertext_1.default.SIZE);
        const groupSecretParamsContents = this.groupSecretParams.getContents();
        const uuidContents = UUIDUtil_1.fromUUID(uuid);
        const ffi_return = Native_1.default.FFI_GroupSecretParams_encryptUuid(groupSecretParamsContents, groupSecretParamsContents.length, uuidContents, uuidContents.length, newContents, newContents.length);
        if (ffi_return != Native_1.FFI_RETURN_OK) {
            throw new ZkGroupError_1.default('FFI_RETURN!=OK');
        }
        return new UuidCiphertext_1.default(newContents);
    }
    decryptUuid(uuidCiphertext) {
        const newContents = new FFICompatArray_1.default(UUIDUtil_1.UUID_LENGTH);
        const groupSecretParamsContents = this.groupSecretParams.getContents();
        const uuidCiphertextContents = uuidCiphertext.getContents();
        const ffi_return = Native_1.default.FFI_GroupSecretParams_decryptUuid(groupSecretParamsContents, groupSecretParamsContents.length, uuidCiphertextContents, uuidCiphertextContents.length, newContents, newContents.length);
        if (ffi_return == Native_1.FFI_RETURN_INPUT_ERROR) {
            throw new VerificationFailedException_1.default('FFI_RETURN_INPUT_ERROR');
        }
        if (ffi_return != Native_1.FFI_RETURN_OK) {
            throw new ZkGroupError_1.default('FFI_RETURN!=OK');
        }
        return UUIDUtil_1.toUUID(newContents);
    }
    encryptProfileKey(profileKey) {
        const random = new FFICompatArray_1.default(crypto_1.randomBytes(Constants_1.RANDOM_LENGTH));
        return this.encryptProfileKeyWithRandom(random, profileKey);
    }
    encryptProfileKeyWithRandom(random, profileKey) {
        const newContents = new FFICompatArray_1.default(ProfileKeyCiphertext_1.default.SIZE);
        const groupSecretParamsContents = this.groupSecretParams.getContents();
        const profileKeyContents = profileKey.getContents();
        const ffi_return = Native_1.default.FFI_GroupSecretParams_encryptProfileKeyDeterministic(groupSecretParamsContents, groupSecretParamsContents.length, random, random.length, profileKeyContents, profileKeyContents.length, newContents, newContents.length);
        if (ffi_return != Native_1.FFI_RETURN_OK) {
            throw new ZkGroupError_1.default('FFI_RETURN!=OK');
        }
        return new ProfileKeyCiphertext_1.default(newContents);
    }
    decryptProfileKey(profileKeyCiphertext) {
        const newContents = new FFICompatArray_1.default(ProfileKey_1.default.SIZE);
        const groupSecretParamsContents = this.groupSecretParams.getContents();
        const profileKeyCiphertextContents = profileKeyCiphertext.getContents();
        const ffi_return = Native_1.default.FFI_GroupSecretParams_decryptProfileKey(groupSecretParamsContents, groupSecretParamsContents.length, profileKeyCiphertextContents, profileKeyCiphertextContents.length, newContents, newContents.length);
        if (ffi_return == Native_1.FFI_RETURN_INPUT_ERROR) {
            throw new VerificationFailedException_1.default('FFI_RETURN_INPUT_ERROR');
        }
        if (ffi_return != Native_1.FFI_RETURN_OK) {
            throw new ZkGroupError_1.default('FFI_RETURN!=OK');
        }
        return new ProfileKey_1.default(newContents);
    }
    encryptBlob(plaintext) {
        const newContents = FFICompatArray_1.default(plaintext.length);
        const groupSecretParamsContents = this.groupSecretParams.getContents();
        const ffi_return = Native_1.default.FFI_GroupSecretParams_encryptBlob(groupSecretParamsContents, groupSecretParamsContents.length, plaintext, plaintext.length, newContents, newContents.length);
        if (ffi_return != Native_1.FFI_RETURN_OK) {
            throw new ZkGroupError_1.default('FFI_RETURN!=OK');
        }
        return newContents;
    }
    decryptBlob(blobCiphertext) {
        const newContents = new FFICompatArray_1.default(blobCiphertext.length);
        const groupSecretParamsContents = this.groupSecretParams.getContents();
        const ffi_return = Native_1.default.FFI_GroupSecretParams_decryptBlob(groupSecretParamsContents, groupSecretParamsContents.length, blobCiphertext, blobCiphertext.length, newContents, newContents.length);
        if (ffi_return == Native_1.FFI_RETURN_INPUT_ERROR) {
            throw new VerificationFailedException_1.default('FFI_RETURN_INPUT_ERROR');
        }
        if (ffi_return != Native_1.FFI_RETURN_OK) {
            throw new ZkGroupError_1.default('FFI_RETURN!=OK');
        }
        return newContents;
    }
}
exports.default = ClientZkGroupCipher;
