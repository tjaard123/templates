# Serverless WebSocket

```sh
yarn install

# Deploy to AWS first
npm run sls -- deploy

# Broadcast a message to all listening clients
npm run broadcast
```

## Opinions

Websockets are tricky to host. If you choose containers the issue is ingress, a wss:// connection first makes an HTTP call and then upgrades to a WebSocket connection. In most cases you need it to be encrypted (wss and not ws) which adds to the complexity. AWS load balancer can also be tricky to allow WebSocket traffic. If you choose Serverless, you're left to manage the WebSocket clients yourself, via DynamoDb for example.

In the end I chose the serverless WebSocket, it's best supported by AWS.

- [AWS API Gateway WebSockets](https://blog.neverendingqs.com/2019/07/01/serverless-websocket-example.html)
- [Serverless framework - Development framework for serverless apps](https://www.serverless.com/)
- [DynamoDb - Just easy to use, don't really care](https://aws.amazon.com/dynamodb)
- [Chrome WebSocket client - for testing websockets](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo?hl=en)
- [Prettier - standardized styling](https://prettier.io/)

## Testing

- Using Chrome WebSocket client, open the connection.
    - E.g. wss://bc4pp4fk7j.execute-api.eu-west-1.amazonaws.com/dev
- Pass any message to hit the default route, you should get a response back.
- To hit a specific custom route, send: `{ "action": "foo" }`