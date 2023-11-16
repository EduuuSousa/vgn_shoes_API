import { Router } from "express";
import { CadastrarProduto } from "../repository/produto/produtoRepository.js";


const endpoint = Router();


endpoint.post('/cadastrar-produto', async (req,resp) => {

    try {
        const novoProduto=req.body;

        if (!novoProduto.nome)
        throw new Error('Nome do Produto é obrigatorio!');

        if (!novoProduto.preco)
        throw new Error('preço do Produto é obrigatorio!');

        if (!novoProduto.avaliacao)
        throw new Error('avalicao do Produto é obrigatorio!');

        if (!novoProduto.genero)
        throw new Error('genero do Produto é obrigatorio!');

        if (!novoProduto.estoque)
        throw new Error('estoque do Produto é obrigatorio!');

        if (!novoProduto.disponivel)
        throw new Error('disponivel do Produto é obrigatorio!');

        if (!novoProduto.Descricao)
        throw new Error('Descricao do Produto é obrigatorio!');

        if (!novoProduto.Forro)
        throw new Error('Forro do Produto é obrigatorio!');

        if (!novoProduto.solado)
        throw new Error('solado do Produto é obrigatorio!');

        if (!novoProduto.palmilha)
        throw new Error('palmilha do Produto é obrigatorio!');


    } catch (error) {
        resp.status(400).send({
            error: error.message
        })
    }
});

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