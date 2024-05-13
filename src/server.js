import express from "express";
import url from "url";
import path from "path"
import "dotenv/config"
import http from "http";
import { Server } from "socket.io";
import "./dbConnect.js";

const app = express();
const port = process.env.PORT;

const currentPath = url.fileURLToPath(import.meta.url);
const publicFolder = path.join(currentPath, "../../", "public");

app.use(express.static(publicFolder));

const httpServer = http.createServer(app);

httpServer.listen(port, () => console.log(`Server is running on port: ${port}`));

const io = new Server(httpServer);

export default io;