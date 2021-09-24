import { FFICompatArrayType } from '../internal/FFICompatArray';
import ServerPublicParams from '../ServerPublicParams';
import ReceiptCredential from "./ReceiptCredential";
import ReceiptCredentialPresentation from "./ReceiptCredentialPresentation";
import ReceiptCredentialRequestContext from "./ReceiptCredentialRequestContext";
import ReceiptCredentialResponse from "./ReceiptCredentialResponse";
import ReceiptSerial from "./ReceiptSerial";
export default class ClientZkReceiptOperations {
    serverPublicParams: ServerPublicParams;
    constructor(serverPublicParams: ServerPublicParams);
    createReceiptCredentialRequestContext(receiptSerial: ReceiptSerial): ReceiptCredentialRequestContext;
    createReceiptCredentialRequestContextWithRandom(random: FFICompatArrayType, receiptSerial: ReceiptSerial): ReceiptCredentialRequestContext;
    receiveReceiptCredential(receiptCredentialRequestContext: ReceiptCredentialRequestContext, receiptCredentialResponse: ReceiptCredentialResponse): ReceiptCredential;
    createReceiptCredentialPresentation(receiptCredential: ReceiptCredential): ReceiptCredentialPresentation;
    createReceiptCredentialPresentationWithRandom(random: FFICompatArrayType, receiptCredential: ReceiptCredential): ReceiptCredentialPresentation;
}
