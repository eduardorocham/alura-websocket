import io from "./server.js";

io.on("connection", (socket) => {
    console.log("A client has connected! ID: ", socket.id);
})