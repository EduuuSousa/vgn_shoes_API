import { Router } from 'express';
import { InserirImagem } from '../repository/produto/imagemRepository';

import multer from 'multer';

const endpoint = Router();
const upload = multer({ dest: 'storage/tenis' });

endpoint.post('/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const linhasAfetadas = await InserirImagem (imagem, id);

        if (linhasAfetadas !== 1) {
            throw new Error('A imagem não pôde ser salva :(');
        }

        resp.status(204).send();
    } catch (error) {
        resp.status(400).send(error.message);
    }
});

export default endpoint;