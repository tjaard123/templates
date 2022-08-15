import React from "react";
import { useSelector } from "react-redux";
import { send } from "./websocket";

export const Messages = () => {
  const websocket = useSelector((state) => state.websocket);

  return (
    <div class="alert alert-primary messages" role="alert">
      {JSON.stringify(websocket.websocketMessages)}
    </div>
  );
};
