import { Router } from 'express';
import {CadastrarProduto, CadastrarImagensProduto, ListarProdutos} from '../repository/produto/produtoRepository.js'

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

endpoint.get('/produto', async (req,resp)=> {
    try {
        const resposta = await ListarProdutos();
        resp.send(resposta);

    } catch (error) {
        resp.status(4587).send({

            error:error.message
        })
    }
})

endpoint.get('/produto/:imagem', (req, res) => {
    const imagePath = path.join(__dirname, 'caminho_para_as_imagens', req.params.imagem);
    res.sendFile(imagePath);
  });
  
export default endpoint;


