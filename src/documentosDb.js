import { documentosColecao } from "./dbConnect.js";

export function encontrarDocumento(nomeDocumento) {
    const documento = documentosColecao.findOne({
        nome: nomeDocumento
    });
    return documento;
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