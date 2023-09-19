import { conexao } from "../connection.js";


export async function InserirCartao( cartao ){
    const comando= `    insert into tb_cartao( nm_cartao, nm_pessoa, nr_cartao, nr_cvc, dt_validade)
                                        values( ?, ?, ?, ?, ?)`
                            
    let [ dados ] = await conexao.query( comando, [
        cartao.nome,
        cartao.pessoa,
        cartao.cartao,
        cartao.cvc,
        cartao.validade
    ])
    cartao.id = dados.insertId
    return cartao 
}

export async function AlterarCartao( cartao, id){
    const comando= `    update      tb_cartao
                        set         nm_cartao = ?
                                    nm_pessoa = ?
                                    nr_cartao = ?
                                    nr_cvc = ?
                                    dt_validade = ?`

    let [ dados ] = await conexao.query( comando, [
        cartao.nome,
        cartao.pessoa,
        cartao.cartao,
        cartao.cvc,
        cartao.validade,
        id
    ])
    let linha = dados.affectedRows;
    return linha
}

export async function ExcluirCartao( id ){
    const comando =`    delete 
                        from        tb_cartao
                        where       id_cartao = ?`

    let [ dados ] = await conexao.query( comando, [ id ])
    let linha = dados.affectedRows;
    return linha;
}

export async function consultarCartao(){
    const comando =`    select      id_cartao as id
                                    nm_cartao as cartao
                                    nm_pessoa as pessoa
                                    nr_cartao as numero
                                    nr_cvc as cvc
                                    dt_validade as validade`

    let [ dados ] = await conexao.query( comando, [])
    return dados;
}