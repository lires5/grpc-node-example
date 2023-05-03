import * as grpc from '@grpc/grpc-js';
import customConfig from '../server/config/default';
import { proto } from "./client";
import express, { Request, Response } from "express";
import morgan from 'morgan';

const client = new proto.HelloService(
    `0.0.0.0:${customConfig.port}`,
    grpc.credentials.createInsecure()
);
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    onClientReady();
});

function onClientReady() {
    console.log("? gRPC Client is ready")
}

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.post("/greeting", async (req: Request, res: Response)=>{
    const {name} = req.body;
    client.greet(
        { name },
        (err, data) => {
            if (err) {
                return res.status(400).json({
                    status: "fail",
                    message: err.message
                })
            }
            return res.status(201).json({
                status: "success",
                greeting: data?.greeting
            })
        }
    );
})

type GreetingType = {
    greeting: string
};
app.post("/stream-greetings", async (req: Request, res: Response) => {
    const {name} = req.body;
    const stream = client.streamGreet({name});
    const greetings: GreetingType[] = [];
    stream.on("data", (data: GreetingType) => {
        console.log("Greeting get ", data.greeting);
        greetings.push(data);
    })
    stream.on("end", () => {
      console.log("Streaming off");
      res.status(200).json({
         status: "success",
         numberOfGreetings: greetings.length,
         greetings
      });
    })
    stream.on("error", (err) => {
       res.status(500).json({
           status: "error",
           message: err.message
       })
    });
})

const port = 8082
app.listen(port, ()=>{
    console.log("Express client started successfully on port: ", port)
})
