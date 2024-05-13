import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.DB_CONNECTION);

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websocket");
    documentosColecao = db.collection("documentos");

    console.log("Conexão com o banco de dados feita com sucesso!");
} catch (erro) {
    console.log(erro);
}

export { documentosColecao };