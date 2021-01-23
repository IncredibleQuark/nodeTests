import {app} from "./app";
import * as request from 'supertest';
import {IHelloBody} from "./IHelloBody";

describe("testing route", () => {
    it("Should get Hello World", async () => {
        const { body }: {body: IHelloBody} = await request(app).get("/")

        expect(body).toEqual({
            data: "hello"
        })
    })
})
