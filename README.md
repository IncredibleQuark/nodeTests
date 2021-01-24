# Server-Sent Events node.js

This is a simple implementation of SSE in node.js. To test run it just do as follows:

1. Install dependencies ``npm i ``
2. Start server ``npm run dev``
3. Now you can subscribe as a client to server for incoming messages 
``curl  -H Accept:text/event-stream http://localhost:3000/events``
   
4. Send new event data on: 

``curl -X POST  -H "Content-Type: application/json" -d '{"data": "newTestData"}' -s http://localhost:3000/events`` 

and watch clients to receive updates




