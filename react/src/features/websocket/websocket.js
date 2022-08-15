import store from "../../store";
import { websocketSlice } from "../websocket/websocketSlice";
const wss_url = "ws://localhost:8080";

const connectWebSocket = () => {
  let socket = new WebSocket(wss_url);

  socket.onmessage = (event) => {
    console.log("Received: %s", event.data);
    store.dispatch(websocketSlice.actions.websocket(event.data));
  };

  socket.onclose = (event) => {
    console.info("Websocket disconnected, reconnecting...");
    socket = null;
    setTimeout(() => connectWebSocket(), 5000);
  };

  socket.onopen = async (event) => {
    console.info("Websocket opened");
  };

  socket.onerror = (event) => {
    console.info("Websocket error");
    console.error(event);
    socket.close();
    socket = null;
  };

  return socket;
};

let s = connectWebSocket();

const send = (data) => {
  console.log("Sending: %s", data);
  if (s.readyState !== 1) {
    setTimeout(() => send(data), 10);
    return;
  }

  s.send(data);
};

export { send };
