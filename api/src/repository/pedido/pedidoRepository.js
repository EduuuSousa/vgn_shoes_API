import { conexao } from "../connection.js";


export async function InserirPedido( pedido ){
    const comando =`    insert into tb_pedido( id_endereco, id_cartao, nr_perdido, ds_nota_fiscal, qtd_parcelas, dt_pedido, ds_situacao, ds_pagamento)
                                        values( ?, ?, ?, ?, ?, ?, ?, ?)`

    let [ dados ] = await conexao.query( comando, [
        pedido.endereco,
        pedido.cartao,
        pedido.nota,
        pedido.parcela,
        pedido.data,
        pedido.situacao,
        pedido.pagamento
    ])
    pedido.id= dados.insertId;
    return pedido;
}

export async function AlterarPedido( pedido, id){
    const comando =`    update      tb_pedido
                        set         id_endereco = ?
                                    id_cartao = ?
                                    ds_nota_fiscal = ?
                                    qtd_parcelas = ?
                                    dt_pedido = ?
                                    ds_situacao = ?
                                    ds_pagamento = ?`
                            
    let [ dados ] = await conexao.query( comando, [
        pedido.endereco,
        pedido.cartao,
        pedido.nota,
        pedido.parcela,
        pedido.data,
        pedido.situacao,
        pedido.pagamento,
        id
    ]);
    let linha = dados.affectedRows;
    return linha; 
}

export async function ExcluirPedido( id ){
    const comando =`    delete
                        from        tb_pedido
                        where       id_pedido = ?`
                
    let [ dados ] = await conexao.query( comando, [ id ]);
    let linha = dados.affectedRows;
    return linha
}

export async function ConsultarPedidos(){
    const comando =`    select      id`
}