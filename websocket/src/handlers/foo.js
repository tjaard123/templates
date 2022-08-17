// Handler for customr route "foo". Triggered by sending { "action": "foo" }

export const handler = (event, context) => {
  const {
    body,
    requestContext: { connectionId, routeKey },
  } = event;
  console.log(`Received custom message (foo) from client ${connectionId}`);

  // Logic

  return { statusCode: 200 };
}
