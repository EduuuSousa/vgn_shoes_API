import 'dotenv/config'

import cors from 'cors';
import express from 'express';
import ClienteController from '../src/controller/userController.js'

const server= express();
server.use(cors());
server.use(express.json());
server.use(ClienteController)

server.listen( process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))