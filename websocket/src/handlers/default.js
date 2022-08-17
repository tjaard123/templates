// Handler for messages from WebSocket without any custom route match

import { sendMessage } from "../aws/api-gateway.js";

export const handler = async (event, context) => {
  const {
    body,
    requestContext: { connectionId, routeKey },
  } = event;
  console.log(`Received default message from client ${connectionId}`);

  try {
    await sendMessage(connectionId, `Received: { route: ${routeKey}, connectionId: ${connectionId}, body: ${body} }`);
  } catch (err) {
    console.log(err);
  }

  return { statusCode: 200 };
};  
