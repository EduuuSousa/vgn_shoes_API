import { conexao } from "../connection.js";


export async function InserirTamanho( tamanho ){
    const comando= `    insert into tb_tamanho( id_produto, ds_tamanho)
                                        values( ?, ?)`
                        
    let [ dados ] = await conexao.query( comando, [
        tamanho.idProduto,
        tamanho.tamanho
    ])
    tamanho.id= dados.insertId;
    return tamanho
}

export async function AlterarTamanho( tamanho, id){
    const comando= `    update      tb_tamanho
                        set         id_produto = ?
                                    ds_tamanho = ?
                        where       id_tamanho = ?`
            
    let [ dados ] = await conexao.query( comando, [
        tamanho.idProduto,
        tamanho.tamanho,
        id
    ])
    let linha= dados.affectedRows;
    return linha
}

export async function ExcluirTamanho( id ){
    const comando= `    delete
                        from        tb_tamanho
                        where       id_tamanho = ?`

    let [ dados ] = await conexao.query( comando, [ id ])
    let linha = dados.affectedRows;
    return linha;
}

export async function consultarPorTamanho( tamanho ){
    const comando= `    select      id_tamanho as tamanho
                                    id_produto as produto
                                    ds_tamanho as tamanho
                        where =     ds_tamanho = ?`

    let [ dados ] = await conexao.query( comando, [ tamanho ])
    return dados
}