import { query } from "express";
import conexao from "../connection.js";

export async function CadastrarProduto(produto){
    const comando = `insert into tb_produto (nm_produto, vl_preco, nr_avaliacao, ds_genero, nr_estoque, bt_disponivel)
                                  values(?, ?, ? , ?, ?, ?);`;

    const [dados] = await conexao.query(comando , [
        produto.nome,
        produto.preco,
        produto.avaliacao,
        produto.genero,
        produto.estoque,
        produto.disponivel
    ]);

    
    produto.id = dados.InsetID;
    return produto
}