// A utility lambda function to broadcast to all WebSocket clients in DynamoDb

import { sendMessage } from "../aws/api-gateway.js";
import { getAllConnections } from "../aws/dynamo-db.js";

export const handler = async function (event, context) {
  console.log("Broadcast invoked...");
  const connections = await getAllConnections();
  await Promise.all(connections.map((connectionId) => sendMessage(connectionId, event)));
};
