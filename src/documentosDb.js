import { documentosColecao } from "./dbConnect.js";

export function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

export function encontrarDocumento(nomeDocumento) {
    const documento = documentosColecao.findOne({
        nome: nomeDocumento
    });
    return documento;
}

export function adicionarDocumento(nomeDocumento) {
    const resultado = documentosColecao.insertOne({
        nome: nomeDocumento,
        texto: ""
    });

    return resultado;
}

export function atualizarDocumento(nomeDocumento, texto) {
    const atualizacao = documentosColecao.updateOne({
        nome: nomeDocumento
    }, {
        $set: {
            texto
        }
    })

    return atualizacao;
}