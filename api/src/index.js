import 'dotenv/config'

import cors from 'cors';
import express from 'express';
import ClienteController from '../src/controller/userController.js'
import ProdutoController from '../src/controller/produtoController.js'
import admController from '../src/controller/admController.js'


const server= express();
server.use(cors());
server.use(express.json());
server.use(ClienteController)
server.use(ProdutoController)
server.use(admController)
server.use('storage/tenis',express.static('storage/tenis'));


server.listen( process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))