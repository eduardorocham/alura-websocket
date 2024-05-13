import io from "./server.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript..."
    },
    {
        nome: "Node",
        texto: "texto de node..."
    },
    {
        nome: "Socket.io",
        texto: "texto de socket.io..."
    },
]

io.on("connection", (socket) => {
    console.log("A client has connected! ID: ", socket.id);

    socket.on("selecionar_documento", (nomeDocumento) => {
        const documento = encontrarDocumento(nomeDocumento);
        console.log(documento);
        socket.join(nomeDocumento);
    })

    socket.on("texto_editor", ({ texto, nomeDocumento }) => {
        // socket.broadcast.emit("texto_editor_clientes", texto);

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto)
    })

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });
})

function encontrarDocumento(nomeDocumento) {
    const documento = documentos.find(doc => doc.nome === nomeDocumento);
    return documento;
}