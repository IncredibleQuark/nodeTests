import {AppRouter} from "./app";
import * as request from 'supertest';
import {INewsBody} from "./INewsBody";

const appRouter: AppRouter = new AppRouter();

describe("testing route", () => {
    it("Should get Hello World", async () => {
        const {body}: { body: INewsBody } = await request(appRouter.getApp()).get("/")

        expect(body).toEqual({
            data: "hello"
        })
    })
})
