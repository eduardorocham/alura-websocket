import io from "./server.js";
import { encontrarDocumento, atualizarDocumento, obterDocumentos } from "./documentosDb.js";

io.on("connection", (socket) => {
    console.log("A client has connected! ID: ", socket.id);

    socket.on("obter_documentos", async (devolverDocumentos) => {
        // console.log("O cliente está solicitando os documentos!");
        const documentos = await obterDocumentos();

        devolverDocumentos(documentos);
    });

    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);

        const documento = await encontrarDocumento(nomeDocumento);

        if (documento) {
            // socket.emit("texto_documento", documento.texto);
            devolverTexto(documento.texto);
        }
    }) 

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
        // socket.broadcast.emit("texto_editor_clientes", texto);
        const atualizacao = await atualizarDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }
    })

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });
})

