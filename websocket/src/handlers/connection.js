// Handler to save and delete WebSocket connections to DynamoDb

import { saveConnection, deleteConnection } from "../aws/dynamo-db.js";

export const handler = async (event, context) => {
  const {
    requestContext: { connectionId, routeKey },
  } = event;

  switch (routeKey) {
    case "$connect":
      console.log(`Client ${connectionId} connected`);
      await saveConnection(connectionId);
      break;

    case "$disconnect":
      console.log(`Client ${connectionId} disconnected`);
      await deleteConnection(connectionId);
      break;
  }

  return { statusCode: 200 };
};
