import { inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    console.log(documentos)
    documentos.forEach((documento) => {
        inserirLinkDocumento(documento.nome);
    })
});