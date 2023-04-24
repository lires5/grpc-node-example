// Original file: proto/hello_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GreetRequest as _GreetRequest, GreetRequest__Output as _GreetRequest__Output } from './GreetRequest';
import type { GreetResponse as _GreetResponse, GreetResponse__Output as _GreetResponse__Output } from './GreetResponse';

export interface HelloServiceClient extends grpc.Client {
  greet(argument: _GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _GreetRequest, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _GreetRequest, callback: grpc.requestCallback<_GreetResponse__Output>): grpc.ClientUnaryCall;
  
  streamGreet(argument: _GreetRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_GreetResponse__Output>;
  streamGreet(argument: _GreetRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_GreetResponse__Output>;
  streamGreet(argument: _GreetRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_GreetResponse__Output>;
  streamGreet(argument: _GreetRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_GreetResponse__Output>;
  
}

export interface HelloServiceHandlers extends grpc.UntypedServiceImplementation {
  greet: grpc.handleUnaryCall<_GreetRequest__Output, _GreetResponse>;
  
  streamGreet: grpc.handleServerStreamingCall<_GreetRequest__Output, _GreetResponse>;
  
}

export interface HelloServiceDefinition extends grpc.ServiceDefinition {
  greet: MethodDefinition<_GreetRequest, _GreetResponse, _GreetRequest__Output, _GreetResponse__Output>
  streamGreet: MethodDefinition<_GreetRequest, _GreetResponse, _GreetRequest__Output, _GreetResponse__Output>
}
