import express from "express"
import { fileURLToPath } from "url";
import { dirname } from "path";
import router from "./routes/routes.js";
import cors from 'cors';
import path from "path";
import DBConnection from "./database/db.js";
const app=express();
app.use(cors());
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
app.get("/", (req, res) => { app.use(express.static(path.resolve(__dirname, "client", "build"))); res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); });
app.use('/', router);
const PORT=8000;
DBConnection();
app.listen(PORT, ()=>{
    console.log("server started");
})