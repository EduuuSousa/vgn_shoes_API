import { Router } from 'express';
import {CadastrarProduto, CadastrarImagensProduto, ListarProdutos, ProdutosInfo} from '../repository/produto/produtoRepository.js'

import multer from 'multer';

const endpoint = Router();
const upload = multer({ dest: 'storage/tenis' });

endpoint.post('/produto/:id/imagens/:campo', upload.single('prodimg') ,async (req, resp) => {
    try {
        if (!req.file)
            throw new Error("Não foi possível salvar a imagem!")
        
        const {id, campo} = req.params;
        const img = req.file.path;

        const resposta = await CadastrarImagensProduto(img, id, campo);
        if (resposta != 1)
            throw new Error("Não foi possível salvar a imagem!")
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoint.post('/produto/registrar', async (req, resp) => {
    try {
        const Produto=req.body;

        if (!Produto.nome || Produto.nome == '')
        throw new Error('Nome do Produto é obrigatorio!');

        if (!Produto.preco || Produto.preco == '')
        throw new Error('preço do Produto é obrigatorio!');

        if (!Produto.avaliacao || Produto.avaliacao == '')
        throw new Error('avalicao do Produto é obrigatorio!');

        if (!Produto.genero || Produto.genero == '')
        throw new Error('genero do Produto é obrigatorio!');

        if (!Produto.estoque || Produto.estoque == '')
        throw new Error('estoque do Produto é obrigatorio!');

        if (!Produto.disponivel || Produto.disponivel == '')
        throw new Error('disponivel do Produto é obrigatorio!');

        if (!Produto.descricao || Produto.descricao == '')
        throw new Error('Descricao do Produto é obrigatorio!');

        const resposta = await CadastrarProduto(Produto);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(500).send({ erro: err.message });
    }
})

endpoint.get('/produto', async (req, resp) => {
    try {
        const { limit } = req.query;
        // Converta o limite para um número (certifique-se de validar e lidar com casos em que não é fornecido)
        const quantidadeLimite = parseInt(limit, 1) || 1;
        
        // Faça algo com o limite na lógica de busca ou consulta
        const resposta = await ListarProdutos({ limit: quantidadeLimite });
        resp.send(resposta);
    } catch (error) {
        resp.status(500).send({
            error: error.message
        });
    }
});





  endpoint.get('/produto/:id', async (req, resp) => {
    try {
        const {id} = req.params;

        const resposta = await ProdutosInfo(id);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(240).send({
            erro: err.message
        })
    }
})
  
export default endpoint;


