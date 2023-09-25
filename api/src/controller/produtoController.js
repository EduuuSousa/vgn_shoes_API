import { Router } from "express";
import { CadastrarProdutom, consultarProduto, deletarProduto, AlterarProduto } from "../repository/produtoRepository.js";


const endpoint = Router();

endpoint.post('/produto' ,async (req, resp) => {
    try {
        let produto = req.body;
        let r = await CadastrarProdutom( produto );
        resp.send(r);
    } catch (err) {
        resp.status(400).send(
            err.message
        )
    }
} )

endpoint.put('/produto/:id' ,async (req, resp ) => {
    try {
        let produto = req.body;
        let id = req.params.id;
        let r = await AlterarProduto( produto, id)

        resp.send()
    } catch (err) {
        resp.status(400).send(
            err.message
        )
    }
})

endpoint.delete('/produto/:id' ,async (req, resp) => { 
    try {
        let id = req.params.id;
        let r = await deletarProduto( id );

        resp.send()
    } catch (err) {
        resp.status(400).send( 
            err.message
        )
    }
})

endpoint.get('/produto' ,async (req, resp) => {
    try {
        let r = await consultarProduto();
        resp.send(r)
    } catch (err) {
        resp.status(400).send(
            err.message
        )
    }
}) 

export default endpoint