import multer from "multer";

import { conexao } from "../connection.js";

import { InserirImagem } from "../repository/produto/imagemRepository.js";


const endpoint = Router();

const upload = multer({dest:'storege/tenis'})


endpoint.post('/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {

    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resp = await InserirImagem(imagem, id);

        if (resposta != 1)
            throw new Error('A imagem não pode ser salva :(');



        resp.status(204).send();

    } catch (error) {
        resp.status(400).send(
            err.message
        )
    }

})