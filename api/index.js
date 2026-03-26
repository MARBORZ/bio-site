import app from "../bio-site-server/index.js";
import express from "express";

const server = express();
server.use("/api", app);

export default server;
