import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto-gen/hello_service';
import { HelloServiceHandlers } from "../proto-gen/HelloService"
import customConfig from './config/default';
import {greetHandler, greetStreamHandler} from "./controllers/greet.controller";
import {UntypedServiceImplementation} from "@grpc/grpc-js";
import { GreetRequest__Output } from '../proto-gen/GreetRequest';
import { GreetResponse } from '../proto-gen/GreetResponse';

const options: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const PORT = customConfig.port;
const PROTO_FILE = '../proto/hello_service.proto';
const packageDef = protoLoader.loadSync(
    path.resolve(__dirname, PROTO_FILE),
    options
);

const proto = grpc.loadPackageDefinition(
    packageDef
) as unknown as ProtoGrpcType;

const server = new grpc.Server();

// Post Services
server.addService(proto.HelloService.service, <UntypedServiceImplementation>{
    greet: (req: grpc.ServerUnaryCall<GreetRequest__Output, GreetResponse>,
                   res: grpc.sendUnaryData<GreetResponse>) => greetHandler(req, res),
    streamGreet: (call: grpc.ServerWritableStream<GreetRequest__Output, GreetResponse>) =>
        greetStreamHandler(call)
} as HelloServiceHandlers)
server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) {
            console.error(err);
            return;
        }
        server.start();
        console.log(`? Server listening on ${port}`);
    }
);
