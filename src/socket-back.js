import io from "./server.js";

io.on("connection", (socket) => {
    console.log("A client has connected! ID: ", socket.id);

    socket.on("selecionar_documento", (nome) => {
        console.log(nome);
    })

    socket.on("texto_editor", (texto) => {
        socket.broadcast.emit("texto_editor_clientes", texto);
    })

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });
})