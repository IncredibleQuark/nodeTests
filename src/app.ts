import * as express from 'express';
import {Express, Request, Response} from "express";
import {INewsBody} from "./INewsBody";
import {IClient} from "./IClient";
import * as bodyParser from "body-parser";

export class AppRouter {

    public app: Express;
    public clients: IClient[] = [];
    public news: INewsBody[] = [];

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.initRoutes();
    }

    public getApp(): Express {
        return this.app;
    }

    private initRoutes(): void {
        this.app.get('/', (req: Request, res: Response<INewsBody>): void => {
            res.send({data: "hello"});
        })
        this.app.get('/events', this.subscribeToEvents.bind(this))
        this.app.post('/events', this.addNewEvent.bind(this))
    }

    private addNewEvent(req: Request, res: Response): void {

        const newData: INewsBody = req.body;
        console.log(`Got new event: ${JSON.stringify(newData)}`);

        this.news.push(newData);
        res.json(newData);

        return this.emitEvents(newData);
    }

    private subscribeToEvents(req: Request, res: Response<INewsBody>): void {
        console.log("Subscribing to events");

        const headers = {
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache'
        };
        res.writeHead(200, headers);

        res.write(JSON.stringify({data:this.news}));

        const newClient: IClient = {
            id: (new Date).toISOString(),
            response: res,
        };

        this.clients.push(newClient);

        req.on('close', () => {
            console.log(`Connection closed, client ID: ${newClient.id} `);
            this.clients = this.clients.filter(c => c.id !== newClient.id);
        });
    }

    private emitEvents(newData: INewsBody): void {
        console.log("Emitting new data to clients");
        this.clients.forEach( (client) => {
            client.response.write(JSON.stringify(newData))
        })
    }

}
