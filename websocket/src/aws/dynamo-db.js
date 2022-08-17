import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const connectionsTable = process.env.CONNECTIONS_TABLE;

export const saveConnection = async (connectionId) => {
  await dynamoDb
    .put({
      TableName: connectionsTable,
      Item: {
        connectionId,
        // Expire the connection an hour later. This is optional, but recommended.
        ttl: parseInt(Date.now() / 1000 + 3600),
      },
    })
    .promise();
};

export const deleteConnection = async (connectionId) => {
  await dynamoDb
    .delete({
      TableName: connectionsTable,
      Key: { connectionId },
    })
    .promise();
};

export const getAllConnections = async (ExclusiveStartKey) => {
  const { Items, LastEvaluatedKey } = await dynamoDb
    .scan({
      TableName: connectionsTable,
      AttributesToGet: ["connectionId"],
      ExclusiveStartKey,
    })
    .promise();

  const connections = Items.map(({ connectionId }) => connectionId);
  if (LastEvaluatedKey) {
    connections.push(...(await getAllConnections(LastEvaluatedKey)));
  }

  return connections;
};
