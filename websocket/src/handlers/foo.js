// Handler for customr route "foo". Triggered by sending { "action": "foo" }

export async function handler(event, context) {
  const {
    body,
    requestContext: { connectionId, routeKey },
  } = event;
  console.log(`Client ${connectionId} sent custom message: foo`);

  // Logic

  return { statusCode: 200 };
}
