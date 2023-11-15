import { Router } from "express";
import { CadastrarProduto } from "../repository/produto/produtoRepository.js";


const endpoint = Router();

endpoint.post('/cadastrar-produto' ,async (req, resp) => {
    try {
        const produto = req.body;
        await CadastrarProduto(produto); // Aguarda a conclusão da função assíncrona

        resp.status(204).send();
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

/*
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
*/
export default endpoint