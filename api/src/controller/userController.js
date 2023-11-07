import { Router } from "express";
import { Cadastrarcliente, Login, VerificarCPF, VerificarDuplicado } from "../repository/cliente/clienteRepository.js";

const endpoint = Router();


endpoint.post('/criarconta', async ( req, resp ) => {
    try {
        const cliente = req.body;

        if(!cliente.nome){
            throw new Error('Campo "Nome" obrigatório.')
        }

        if(!cliente.cpf){
            throw new Error('Campo "CPF" obrigatório.')
        }

        if(!cliente.nascimento){
            throw new Error('Campo "Data de Nascimento" obrigatório.')
        }

        if(!cliente.email){
            throw new Error('Campo "Email" obrigatório.')
        }

        if(!cliente.senha){
            throw new Error('Campo "Senha" obrigatório.')
        }

        const VerificacaoEmail = await VerificarDuplicado(cliente.email)
        
        if(VerificacaoEmail){
            throw new Error('Email já cadastrado.');
        }

        const VerificarCPFf = await VerificarCPF(cliente.cpf)
        if(VerificarCPFf){
            throw new Error('CPF ja cadastrado');
        }        

        let r = await Cadastrarcliente(cliente);

        resp.status(204).send(r);
        
    } catch (err) {
        resp.status(500).send( {erro: err.message} );
    }
})


endpoint.post('/login-user', async (req, resp) => {
   try{
    const {email , senha} = req.body;
    const resposta = await Login(email , senha);

    if(resposta.length < 1) 

        throw new Error('Credenciais Inválidas');
        resp.status(204).send();
    

   } catch (err) {
    resp.status(500).send( {erro: err.message} );
}
});





export default endpoint