import AWS from "aws-sdk";

export const sendMessage = async (connectionId, body) => {
  const apig = new AWS.ApiGatewayManagementApi({
    endpoint: process.env.APIG_ENDPOINT,
  });

  console.log("sendMessage");
  console.log(`APIG Endpoint: ${process.env.APIG_ENDPOINT}`);
  console.log(`connectionId: ${connectionId}`);
  console.log(`body: ${body}`);

  try {
    await apig
      .postToConnection({
        ConnectionId: connectionId,
        Data: body,
      })
      .promise();
    console.log("await done");
  } catch (err) {
    console.log(err);
    // Ignore if connection no longer exists
    if (err.statusCode !== 400 && err.statusCode !== 410) {
      console.log(err);
    }
  }
};
