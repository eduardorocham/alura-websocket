import { inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    console.log(documentos)
    documentos.forEach((documento) => {
        inserirLinkDocumento(documento.nome);
    })
});

export function emitirAdicionarDocumento(nome) {
    socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento_interface", (nome) => {
    inserirLinkDocumento(nome);
});

socket.on("documento_existente", (nomeDocumento) => {
    alert(`O documento ${nomeDocumento} já existe!`);
});