import { FFICompatArrayType } from '../internal/FFICompatArray';
import ServerSecretParams from '../ServerSecretParams';
import ReceiptCredentialRequest from "./ReceiptCredentialRequest";
import ReceiptCredentialResponse from "./ReceiptCredentialResponse";
import ReceiptCredentialPresentation from "./ReceiptCredentialPresentation";
export default class ServerZkReceiptOperations {
    serverSecretParams: ServerSecretParams;
    constructor(serverSecretParams: ServerSecretParams);
    issueReceiptCredential(receiptCredentialRequest: ReceiptCredentialRequest, receiptExpirationTime: string, receiptLevel: string): ReceiptCredentialResponse;
    issueReceiptCredentialWithRandom(random: FFICompatArrayType, receiptCredentialRequest: ReceiptCredentialRequest, receiptExpirationTime: string, receiptLevel: string): ReceiptCredentialResponse;
    verifyReceiptCredentialPresentation(receiptCredentialPresentation: ReceiptCredentialPresentation): void;
}
