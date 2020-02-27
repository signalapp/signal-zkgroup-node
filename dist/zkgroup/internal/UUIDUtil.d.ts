export declare const UUID_LENGTH = 16;
import { FFICompatArrayType } from './FFICompatArray';
export declare type UUIDType = string;
export declare function toUUID(array: FFICompatArrayType): UUIDType;
export declare function fromUUID(uuid: UUIDType): FFICompatArrayType;
