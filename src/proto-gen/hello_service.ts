import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloServiceClient as _HelloServiceClient, HelloServiceDefinition as _HelloServiceDefinition } from './HelloService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  GreetRequest: MessageTypeDefinition
  GreetResponse: MessageTypeDefinition
  HelloService: SubtypeConstructor<typeof grpc.Client, _HelloServiceClient> & { service: _HelloServiceDefinition }
  language: {
    Language: MessageTypeDefinition
  }
}

