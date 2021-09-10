// package: me.vniche.collective.v1
// file: v1/servers.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ChangeResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeResponse): ChangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeResponse;
  static deserializeBinaryFromReader(message: ChangeResponse, reader: jspb.BinaryReader): ChangeResponse;
}

export namespace ChangeResponse {
  export type AsObject = {
    message: string,
  }
}

export class ResourceIdentity extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceIdentity): ResourceIdentity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceIdentity;
  static deserializeBinaryFromReader(message: ResourceIdentity, reader: jspb.BinaryReader): ResourceIdentity;
}

export namespace ResourceIdentity {
  export type AsObject = {
    name: string,
  }
}

export class ResourceChange extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceChange.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceChange): ResourceChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceChange;
  static deserializeBinaryFromReader(message: ResourceChange, reader: jspb.BinaryReader): ResourceChange;
}

export namespace ResourceChange {
  export type AsObject = {
    message: string,
  }
}

export class ListFilter extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageNumber(): number;
  setPageNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ListFilter): ListFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFilter;
  static deserializeBinaryFromReader(message: ListFilter, reader: jspb.BinaryReader): ListFilter;
}

export namespace ListFilter {
  export type AsObject = {
    pageSize: number,
    pageNumber: number,
  }
}

export class Patch extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getChangesMap(): jspb.Map<string, string>;
  clearChangesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Patch.AsObject;
  static toObject(includeInstance: boolean, msg: Patch): Patch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Patch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Patch;
  static deserializeBinaryFromReader(message: Patch, reader: jspb.BinaryReader): Patch;
}

export namespace Patch {
  export type AsObject = {
    name: string,
    changesMap: Array<[string, string]>,
  }
}

export class Error extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    message: string,
  }
}

export class Event extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): Event.TypeMap[keyof Event.TypeMap];
  setType(value: Event.TypeMap[keyof Event.TypeMap]): void;

  getAction(): Event.ActionMap[keyof Event.ActionMap];
  setAction(value: Event.ActionMap[keyof Event.ActionMap]): void;

  getResource(): Uint8Array | string;
  getResource_asU8(): Uint8Array;
  getResource_asB64(): string;
  setResource(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    name: string,
    type: Event.TypeMap[keyof Event.TypeMap],
    action: Event.ActionMap[keyof Event.ActionMap],
    resource: Uint8Array | string,
  }

  export interface TypeMap {
    UNKNOWN: 0;
    REQUEST: 1;
    EVENT: 2;
  }

  export const Type: TypeMap;

  export interface ActionMap {
    NONE: 0;
    CREATE: 1;
    UPDATE: 2;
    DELETE: 3;
  }

  export const Action: ActionMap;
}

export class Server extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getStatus(): Server.StatusMap[keyof Server.StatusMap];
  setStatus(value: Server.StatusMap[keyof Server.StatusMap]): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Server.AsObject;
  static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Server;
  static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
}

export namespace Server {
  export type AsObject = {
    name: string,
    description: string,
    status: Server.StatusMap[keyof Server.StatusMap],
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface StatusMap {
    UNKNOWN: 0;
    PENDING: 1;
    READY: 2;
    MARKED_FOR_DELETION: 3;
  }

  export const Status: StatusMap;
}

