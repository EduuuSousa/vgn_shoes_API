import { Router } from "express";
import { Cadastrarcliente, Login } from "../repository/cliente/clienteRepository.js";

const endpoint = Router();


endpoint.post('/criarconta', async ( req, resp ) => {
    try {
        let cliente = req.body;
        let r = await Cadastrarcliente( cliente );
        resp.send( r );
    } catch (error) {
         resp.status(400).send( err.mensage )
    }
})


endpoint.get('/login', async ( req, resp ) => {
    try {
        let email = req.body.email;
        let senha = req.body.senha;
        let r = await Login( email, senha );
        resp.send( r );
    } catch (error) {
         resp.status(400).send( err.mensage )
    }
})


export default endpoint