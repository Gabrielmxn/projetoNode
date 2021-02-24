import "reflect-metadata" 
import express from 'express';
import createConnection from "./database";
import { router } from "./routes";

createConnection();

const app = express();

/** 
 * GET ==> Busca
 * POST ==> Salvar
 * PUT ==> Alterar
 * DELETE ==> Deletar
 * PATCH ==> Alteração especifica
**/
//transformando o arquivo em json
app.use(express.json())

app.use(router)

export { app };