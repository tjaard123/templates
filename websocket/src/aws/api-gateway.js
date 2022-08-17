import AWS from "aws-sdk";

const apig = new AWS.ApiGatewayManagementApi({
  endpoint: process.env.APIG_ENDPOINT,
});

export const sendMessage = async (connectionId, body) => {
  try {
    await apig
      .postToConnection({
        ConnectionId: connectionId,
        Data: body,
      })
      .promise();
  } catch (err) {
    // Ignore if connection no longer exists
    if (err.statusCode !== 400 && err.statusCode !== 410) {
      console.log(err);
    }
  }
};
