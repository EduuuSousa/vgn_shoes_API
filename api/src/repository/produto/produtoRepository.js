import { conexao } from "../connection.js";


export async function CadastrarProduto( produto ){
    const comando= `insert into tb_produto( nm_produto, vl_preco, nr_avaliacao, ds_genero, nr_estoque, bt_destaque, bt_disponivel, bt_promocao, vl_precopromocao )
                    values( ?, ?, ?, ?, ?, ?, ?, ?, ?)`

    let [dados] = await conexao.query( comando, [
        produto.nome,
        produto.preco,
        produto.avaliacao,
        produto.genero,
        produto.estoque,
        produto.destaque,
        produto.disponivel,
        produto.promoção,
        produto.preco_promocao
    ]);

    produto.id = dados.InsertID;
    return produto
}


export async function AlterarProduto( id, produto ){
    const comando= `	update		 	tb_produto
                    	set 			nm_produto = ? ,
                                        vl_preco = ? ,
                                        nr_avaliacao = ? ,
                                        ds_genero = ? ,
                                        nr_estoque = ? ,
                                        bt_destaque = ? ,
                                        bt_disponivel = ? ,
                                        bt_promocao = ? ,
                                        vl_precopromocao = ?
	                    where			id_produto = ?`

    let [ dados ] = await conexao.query( comando, [
        produto.nome,
        produto.preco,
        produto.avaliacao,
        produto.genero,
        produto.estoque,
        produto.destaque,
        produto.disponivel,
        produto.promoção,
        produto.preco_promocao,
        id
    ]);
    let linha = dados.affectedRows;
    return linha
}


export async function deletarProduto( id ){
    const comando= `	delete from		tb_produto
                    	where			id_produto = ?`
    
    let [ dados ] = await conexao.query( comando, [id] )

    let linha = dados.affectedRows;
    return linha
}


export async function consultarProduto(){
    const comando= `	select 		id_produto as id
                                    nm_produto as produto
                                    vl_preco as preco
                                    nr_avaliacao as avaliacao
                                    ds_genero as genero
                                    nr_estoque as estoque
                                    bt_destaque as destaque
                                    bt_disponivel as disponivel
                                    bt_promocao as promocao 
                                    vl_precopromocao as preco_da_promocao
                        from		tb_produto`

    let [ dados ] = await conexao.query( comando, [])

    return dados
}

export async function consultarPorNome (nome){
    const comando= `      select 		id_produto as id
                                nm_produto as produto
                                vl_preco as preco
                                nr_avaliacao as avaliacao
                                ds_genero as genero
                                nr_estoque as estoque
                                bt_destaque as destaque
                                bt_disponivel as disponivel
                                bt_promocao as promocao 
                                vl_precopromocao as preco_da_promocao
                    from		tb_produto
                    where       nm_produto like ?`

    let [ dados ] = await conexao.query( comando, [ 
        '?' + nome + '?'
    ])
    return dados        
}

export async function consultarPorPreco ( precoMin, precoMax ){
    const comando= `    select 		id_produto as id
                                    nm_produto as produto
                                    vl_preco as preco
                                    nr_avaliacao as avaliacao
                                    ds_genero as genero
                                    nr_estoque as estoque
                                    bt_destaque as destaque
                                    bt_disponivel as disponivel
                                    bt_promocao as promocao 
                                    vl_precopromocao as preco_da_promocao
                        from		tb_produto
                        where       vl_preco between ? and ?`

    let [ dados ] = await conexao.query( comando, [
        precoMin,
        precoMax
    ]);
    return dados;
}

export async function consultarPorAvaliacao ( avaliacao ){
    const comando= `    select 		id_produto as id
                                    nm_produto as produto
                                    vl_preco as preco
                                    nr_avaliacao as avaliacao
                                    ds_genero as genero
                                    nr_estoque as estoque
                                    bt_destaque as destaque
                                    bt_disponivel as disponivel
                                    bt_promocao as promocao 
                                    vl_precopromocao as preco_da_promocao
                        from		tb_produto`

    let [ dados ] = await conexao.query( comando, [
         avaliacao 
        ]);
    return dados
}

export async function consultarPorGenero ( genero ){
    const comando = `   select 		id_produto as id
                                    nm_produto as produto
                                    vl_preco as preco
                                    nr_avaliacao as avaliacao
                                    ds_genero as genero
                                    nr_estoque as estoque
                                    bt_destaque as destaque
                                    bt_disponivel as disponivel
                                    bt_promocao as promocao 
                                    vl_precopromocao as preco_da_promocao
                        from		tb_produto
                        where       ds_genero = ?`
    
    let [ dados ] = await conexao.query( comando, [
        genero
    ]);
    return dados;
}