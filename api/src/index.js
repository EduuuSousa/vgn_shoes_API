import 'dotenv/config'
import { conexao } from './repository/connection.js';

import cors from 'cors';
import express from 'express';


const server= express();
server.use(cors());
server.use(express.json());

server.listen( process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))