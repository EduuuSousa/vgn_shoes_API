import { conexao } from "../connection.js";


export async function InserirEndereco( endereco ){
    const comando =`    insert into tb_endereco( id_cliente, ds_cep, ds_estado, ds_cidade, ds_rua, ds_bairro, ds_numero)
                                         values( ?, ?, ?, ?, ?, ?, ?)`

    let [ dados ] = await conexao.query( comando, [
        endereco.cliente,
        endereco.cep,
        endereco.estado,
        endereco.cidade,
        endereco.rua,
        endereco.bairro,
        endereco.numero
    ])
    endereco.id = dados.insertId;
    return endereco
}

export async function AlterarEndereco( endereco, id){
    const comando=`     update      tb_endereco
                        set         id_cliente = ?
                                    ds_cep = ?
                                    ds_estado = ?
                                    ds_cidade = ?
                                    ds_rua = ?
                                    ds_bairro = ?
                                    ds_numero = ?
                        where       id_endereco = ?`

    let [ dados ] = await conexao.query( comando, [
        endereco.cliente,
        endereco.cep,
        endereco.estado,
        endereco.cidade,
        endereco.rua,
        endereco.bairro,
        endereco.numero,
        id
    ]);
    let linha = dados.affectedRows;
    return linha;
}

export async function ExcluirEndereco( id ){
    const comando =`    delete
                        from        tb_endereco
                        where       id_endereco = ?`

    let [ dados ] = await conexao.query( comando, [id])
    let linha = dados.affectedRows;
    return linha;
}

export async function consultarEnderecos(){
    const comando =`    select      id_endereco as id
                                    id_cliente as cliente
                                    ds_cep as cep
                                    ds_estado as estado
                                    ds_cidade as cidade
                                    ds_rua as rua
                                    ds_bairro as bairro
                                    ds_numero as numero
                        from        tb_endereco`

    let [ dados ] = await conexao.query( comando, [])
    return dados;
}

export async function consultarEnderecoCliente( id ){
    const comando =`    select      id_endereco as id
                                    id_cliente as cliente
                                    ds_cep as cep
                                    ds_estado as estado
                                    ds_cidade as cidade
                                    ds_rua as rua
                                    ds_bairro as bairro
                                    ds_numero as numero
                        from        tb_endereco
                        where       id_endereco = ?`

    let [ dados ] = await conexao.query( comando, [id]);
    return dados    
}