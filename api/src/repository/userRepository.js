import { conexao } from "./connection.js";

export async function Cadastrarcliente( cliente ){
    const comando = `insert into  tb_cliente( nm_cliente, ds_CPF, dt_nascimento, ds_email, ds_senha)
                     values( ?, ?, ?, ?, ?)`

    let [ dados ] = await conexao.query( comando , [
        cliente.nome,
        cliente.cpf,
        cliente.data_nasc,
        cliente.email,
        cliente.senha
    ])

    cliente.id = dados.InsetID;
    return cliente
};

export async function Login ( email, senha){
    const comando = `	select		id_cliente as id
                                    nm_cliente as nome
                                    ds_CPF as CPF
                                    dt_nascimento as data_nasc
                                    ds_email as email
                                    ds_senha as senha
                        from 		tb_cliente
                        where		ds_email = ? 
                        and			ds_senha = ?`

    let [ dados ] = await conexao.query( comando, [
        email, 
        senha
    ])
    return dados
}

