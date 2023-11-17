import { Router } from "express";
import { CadastroAdm, LoginAdm } from "../repository/adm/admRepository.js";

const endpoint = Router();

endpoint.post('/login-adm', async (req, resp) => {
    try {
        const { login, senha } = req.body;
        const resposta = await LoginAdm(login, senha);

        if (resposta.length < 1) {
            throw new Error('Credenciais Inválidas');
        }
        resp.status(204).send();

    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

endpoint.post('/cadastro-adm', async (req, resp) => {
    try {
        const { login, senha } = req.body;
        const resposta = await CadastroAdm(login, senha);

        resp.status(204).send();
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
})

export default endpoint