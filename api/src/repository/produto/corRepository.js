import { conexao } from "../connection.js";


export async function InserirCor( cor ){
    const comando= ` insert into tb_cor( id_produto, ds_cor)
                                 values( ?, ?)`

    let [ dados ] = await conexao.query( comando, [
        cor.idProduto,
        cor.cor
    ])
    cor.id = dados.insertId;

    return cor;
}

export async function AlterarCor( cor, id ){
    const comando= `    update      tb_cor
                        set         id_produto = ?
                                    ds_cor = ?
                        where       id_cor = ?`

    let [ dados ]= await conexao.query( comando, [
        cor.idProduto,
        cor.cor,
        id
    ]);
    let linha = dados.affectedRows;
    return linha;
}

export async function ExcluirCor( id ){
    const comando= `    delete 
                        from        tb_cor
                        where       id_cor= ? 
                        `
    
    let [ dados ]= await conexao.query( comando, [
        id
    ]);
    let linha= dados.affectedRows;
    return linha
}

export async function consultarPorCor( cor ){
    const comando= `    select     id_produto as produto
                        where      ds_cor = ?`
            
    let [ dados ]= await conexao.query( comando, [
        cor
    ]);
    return dados
}