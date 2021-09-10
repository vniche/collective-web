// package: me.vniche.collective.v1
// file: v1/servers.proto

import * as v1_servers_pb from "../v1/servers_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServersGet = {
  readonly methodName: string;
  readonly service: typeof Servers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_servers_pb.ResourceIdentity;
  readonly responseType: typeof v1_servers_pb.Server;
};

type ServersList = {
  readonly methodName: string;
  readonly service: typeof Servers;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof v1_servers_pb.ListFilter;
  readonly responseType: typeof v1_servers_pb.Server;
};

type ServersCreate = {
  readonly methodName: string;
  readonly service: typeof Servers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_servers_pb.Server;
  readonly responseType: typeof v1_servers_pb.ResourceChange;
};

type ServersUpdate = {
  readonly methodName: string;
  readonly service: typeof Servers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_servers_pb.Patch;
  readonly responseType: typeof v1_servers_pb.ResourceChange;
};

type ServersDelete = {
  readonly methodName: string;
  readonly service: typeof Servers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_servers_pb.ResourceIdentity;
  readonly responseType: typeof v1_servers_pb.ResourceChange;
};

type ServersWatch = {
  readonly methodName: string;
  readonly service: typeof Servers;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof v1_servers_pb.ResourceIdentity;
  readonly responseType: typeof v1_servers_pb.Event;
};

export class Servers {
  static readonly serviceName: string;
  static readonly Get: ServersGet;
  static readonly List: ServersList;
  static readonly Create: ServersCreate;
  static readonly Update: ServersUpdate;
  static readonly Delete: ServersDelete;
  static readonly Watch: ServersWatch;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ServersClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  get(
    requestMessage: v1_servers_pb.ResourceIdentity,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.Server|null) => void
  ): UnaryResponse;
  get(
    requestMessage: v1_servers_pb.ResourceIdentity,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.Server|null) => void
  ): UnaryResponse;
  list(requestMessage: v1_servers_pb.ListFilter, metadata?: grpc.Metadata): ResponseStream<v1_servers_pb.Server>;
  create(
    requestMessage: v1_servers_pb.Server,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.ResourceChange|null) => void
  ): UnaryResponse;
  create(
    requestMessage: v1_servers_pb.Server,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.ResourceChange|null) => void
  ): UnaryResponse;
  update(
    requestMessage: v1_servers_pb.Patch,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.ResourceChange|null) => void
  ): UnaryResponse;
  update(
    requestMessage: v1_servers_pb.Patch,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.ResourceChange|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: v1_servers_pb.ResourceIdentity,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.ResourceChange|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: v1_servers_pb.ResourceIdentity,
    callback: (error: ServiceError|null, responseMessage: v1_servers_pb.ResourceChange|null) => void
  ): UnaryResponse;
  watch(requestMessage: v1_servers_pb.ResourceIdentity, metadata?: grpc.Metadata): ResponseStream<v1_servers_pb.Event>;
}

