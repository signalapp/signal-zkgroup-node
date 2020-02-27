import { FFICompatArrayType } from '../internal/FFICompatArray';
import ServerPublicParams from '../ServerPublicParams';
import ProfileKeyCredentialRequestContext from './ProfileKeyCredentialRequestContext';
import ProfileKey from './ProfileKey';
import ProfileKeyCredential from './ProfileKeyCredential';
import ProfileKeyCredentialPresentation from './ProfileKeyCredentialPresentation';
import GroupSecretParams from '../groups/GroupSecretParams';
import ProfileKeyCredentialResponse from './ProfileKeyCredentialResponse';
import { UUIDType } from '../internal/UUIDUtil';
export default class ClientZkProfileOperations {
    serverPublicParams: ServerPublicParams;
    constructor(serverPublicParams: ServerPublicParams);
    createProfileKeyCredentialRequestContext(uuid: UUIDType, profileKey: ProfileKey): ProfileKeyCredentialRequestContext;
    createProfileKeyCredentialRequestContextWithRandom(random: FFICompatArrayType, uuid: UUIDType, profileKey: ProfileKey): ProfileKeyCredentialRequestContext;
    receiveProfileKeyCredential(profileKeyCredentialRequestContext: ProfileKeyCredentialRequestContext, profileKeyCredentialResponse: ProfileKeyCredentialResponse): ProfileKeyCredential;
    createProfileKeyCredentialPresentation(groupSecretParams: GroupSecretParams, profileKeyCredential: ProfileKeyCredential): ProfileKeyCredentialPresentation;
    createProfileKeyCredentialPresentationWithRandom(random: FFICompatArrayType, groupSecretParams: GroupSecretParams, profileKeyCredential: ProfileKeyCredential): ProfileKeyCredentialPresentation;
}
