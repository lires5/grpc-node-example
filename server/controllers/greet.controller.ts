import * as grpc from '@grpc/grpc-js';
import { GreetRequest__Output } from '../../proto-gen/GreetRequest';
import { GreetResponse } from '../../proto-gen/GreetResponse';
import { makeGreet } from '../services/greet.service';
export const greetHandler = async (
    req: grpc.ServerUnaryCall<GreetRequest__Output, GreetResponse>,
    res: grpc.sendUnaryData<GreetResponse>
) => {
    const greeting = await makeGreet(req.request.name);
    res(null, {
        greeting
    });
}

export const greetStreamHandler = async (
    call: grpc.ServerWritableStream<GreetRequest__Output, GreetResponse>
) => {
    for (let i = 0; i < 5; i++) {
        const greeting = await makeGreet(`${call.request.name} with index ${i}`);
        call.write({
           greeting
        });
    }
    call.end();
}
