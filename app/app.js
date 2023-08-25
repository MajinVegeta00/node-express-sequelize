//Importando modulos necesarios
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import route from "../routes/api/index.js";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import models from "../models/index.js";


const app = express();

app.use(cookieParser());

//?Cargando variables de entorno
dotenv.config();

//*Middlewares
//?Ver peticiones por consola
app.use(morgan("dev"));

//?Reconocer el objeto  como json
app.use(express.json());

//?Reconocer from-data
app.use(express.urlencoded({ extended: false }));

//?Static Content
app.use(express.static(path.join("../uploads")));

//?Permitir entrada de peticiones desde frontend
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

//?Definiendo puerto
const port = process.env.PORT || 9000;


//?Routes
app.use("/api", route);
app.listen(port, () => {
  console.log(`server running on http://localhost/${port}`);
});
