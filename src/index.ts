console.log("hello");
import {app} from "./app";

const server = app.listen(3000, 'localhost', () => {
    console.log("SERVER STARTED LISTENING");
});
