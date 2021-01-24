console.log("hello");
import {AppRouter} from "./app";

const SERVER_DEFAULT_PORT: number = 3000;
const appRouter: AppRouter = new AppRouter();
const server = appRouter.getApp().listen(SERVER_DEFAULT_PORT, 'localhost', () => {
    console.log(`SERVER STARTED LISTENING ON PORT: ${SERVER_DEFAULT_PORT}`);
});
