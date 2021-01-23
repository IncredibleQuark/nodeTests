import * as express from 'express';
import {Request, Response} from "express";
import {IHelloBody} from "./IHelloBody";

const app = express();

app.get('/', (req: Request, res: Response<IHelloBody>): void => {
    res.send({data: "hello"});
})

export {app};
