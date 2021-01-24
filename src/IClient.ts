import {Response} from "express";
import {INewsBody} from "./INewsBody";

export interface IClient {
    id: string,
    response: Response<INewsBody>
}
