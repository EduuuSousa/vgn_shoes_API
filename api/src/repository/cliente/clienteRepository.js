import conexao from "../connection.js";

export async function Cadastrarcliente( cliente ){
    const comando = `insert into  tb_cliente( nm_cliente, ds_cpf, ds_nascimento, ds_email, ds_senha)
                     values( ?, ?, ?, ?, ?)`

    let [ dados ] = await conexao.query( comando , [ 
        cliente.nome,
        cliente.cpf,
        cliente.nascimento,
        cliente.email,
        cliente.senha,
    ])

    cliente.id = dados.InsetID;
    return cliente
};


export async function VerificarDuplicado(email, cpf){
    const comando = 'SELECT * FROM tb_cliente WHERE ds_email = ?';

    const [resposta1] = await conexao.query(comando, [email])
    if(resposta1.length != 0){
        return true
    }
    else{
        false
    }
}

export async function VerificarCPF(cpf){
    const comandocpf = 'select * from tb_cliente where ds_cpf = ?';
    
    const [resposta2] = await conexao.query(comandocpf, [cpf])
    if(resposta2.length != 0){
        return true
    }
    else{
        false
    }
}

export async function AlterarInfos( cliente, id){
    const comando= `update      tb_cliente
                    set         nm_cliente = ?
                                ds_CPF = ?
                                ds_nascimento = ?
                                ds_senha = ? 
                    where       id_cliente = ?`

    let [ dados ] = await conexao.query( comando , [
    cliente.nome,
    cliente.cpf,
    cliente.data_nasc,
    cliente.senha,
    id
    ])
    let linha= dados.affectedRows;
    return linha;
}

export async function ExcluirConta ( id ){
    const comando= `	delete from tb_cliente
	                    where		id_cliente = ?`

    let [dados] = await conexao.query( comando, [
        id
    ]);
    let linha = dados.affectedRows;
    return linha
}

export async function Login(email, senha){
    const comando = 'select * from tb_cliente where ds_email = ? and ds_senha = ?'

    const [dados] = await conexao.query(comando , [email, senha])
    return dados
    
}

export async function registrarCartao(idCartao, idCliente){
    const comando= `update      tb_cliente
                    set         id_cartao = ?
                    where       id_cliente = ?`

    let [dados] = await conexao.query( comando, [
        idCartao,
        idCliente
    ]);
    let linha= dados.affectedRows;
    return linha; 
}

export async function retirarCartao ( idCliente ){
    const comando= `delete      id_cartao
                    from        tb_cliente
                    where       id_cliente = ?`

    let[ dados ] = await conexao.query( comando, [
        idCliente
    ]);
    let linha= dados.affectedRows;
    return linha;
}