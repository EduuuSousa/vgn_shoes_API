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
    resp.send({erro: err.message} );
}
});


endpoint.put('/usuario/att/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const {nome, cpf, email, senha, nascimento} = req.body;

        // EMAIL!!
        if (email == undefined || email == '')
            throw new Error('Email é obrigatório!');

        if (!email.includes("@gmail.com") && !email.includes("@outlook.com"))
            throw new Error('Não é um Email válido!');

        if (!/^[^@]+@gmail\.com$/.test(email) && !/^[^@]+@outlook\.com$/.test(email))
            throw new Error('Não é um Email válido!');

        // NASCIMENTO!!
        if (nascimento == undefined || nascimento == '')
            throw new Error('Nascimento é obrigatório!');


        // CPF!!
        if (cpf == undefined || cpf == '')
            throw new Error('CPF é obrigatório!');

        if (isNaN(cpf))
            throw new Error('Cpf Deve Ser Um Número!');

        if (cpf.length < 11 || cpf.length > 11)
            throw new Error('CPF inválido!');


        // SENHA!!
        if (senha == undefined || senha == '')
            throw new Error('Telefone é obrigatório!');


        // NOME!!
        if (nome == undefined || nome == '')
            throw new Error('Nome é obrigatório!');


        const resposta = await AtualizarPerfil(id, nome, cpf, email, senha, nascimento);
        resp.send(resposta)
    }
    catch (err) {
        resp.status(500).send({ erro: err.message });
    }

})





export default endpoint