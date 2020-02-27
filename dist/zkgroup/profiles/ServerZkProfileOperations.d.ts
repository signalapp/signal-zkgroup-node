import { FFICompatArrayType } from '../internal/FFICompatArray';
import ServerSecretParams from '../ServerSecretParams';
import ProfileKeyCredentialResponse from './ProfileKeyCredentialResponse';
import ProfileKeyCredentialRequest from './ProfileKeyCredentialRequest';
import ProfileKeyCommitment from './ProfileKeyCommitment';
import GroupPublicParams from '../groups/GroupPublicParams';
import ProfileKeyCredentialPresentation from './ProfileKeyCredentialPresentation';
import { UUIDType } from '../internal/UUIDUtil';
export default class ServerZkProfileOperations {
    serverSecretParams: ServerSecretParams;
    constructor(serverSecretParams: ServerSecretParams);
    issueProfileKeyCredential(profileKeyCredentialRequest: ProfileKeyCredentialRequest, uuid: UUIDType, profileKeyCommitment: ProfileKeyCommitment): ProfileKeyCredentialResponse;
    issueProfileKeyCredentialWithRandom(random: FFICompatArrayType, profileKeyCredentialRequest: ProfileKeyCredentialRequest, uuid: UUIDType, profileKeyCommitment: ProfileKeyCommitment): ProfileKeyCredentialResponse;
    verifyProfileKeyCredentialPresentation(groupPublicParams: GroupPublicParams, profileKeyCredentialPresentation: ProfileKeyCredentialPresentation): void;
}
