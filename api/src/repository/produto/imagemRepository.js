import { conexao } from "../connection.js";


export async function InserirImagem( imagem ){
    const comando= `    insert into tb_imagem_produto( id_produto, ds_imagem)
                                                values( ?, ?)`

    let [ dados ] = await conexao.query( comando,[
        imagem.idProduto,
        imagem.imagem
    ]);
    imagem.id = dados.insertId;
    return imagem
}

export async function AlterarImagem( imagem, id){
    const comando= `    update      tb_imagem_produto
                        set         id_produto = ?
                                    ds_imagem_produto = ?
                        where       id_imagem = ?`
                
    let [ dados ] = await conexao.query( comando, [
        imagem.idProduto,
        imagem.imagem,
        id
    ])
    let linha = dados.affectedRows;
    return linha
}

export async function ExcluirImagem( id ){
    const comando= `    delete
                        from        tb_imagem_produto
                        where       id_imagem = ?`

    let [ dados ] = await conexao.query( comando, [id])
    let linha = dados.affectedRows;
    return linha 
}

export async function consultarImagens( id ){
    const comando= `    select      id_imagem as id
                                    id_produto as produto
                                    ds_imagem as imagem
                        from        tb_imagem_produto
                        where       id_produto = ?;`
                
    let [ dados ] = await conexao.query( comando, [ id ])
    return dados;
}