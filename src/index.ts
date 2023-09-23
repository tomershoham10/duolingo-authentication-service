import startServer from "./server.js";

(async () => {
  try {
    console.log("connected");
    startServer();
  } catch (e) {
    console.log(e);
  }
})();
