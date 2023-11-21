import { query } from "express";
import conexao from "../connection.js";

export async function CadastrarProduto(produto) {

    const comando = `
    INSERT INTO tb_produto (nm_produto, vl_preco, nr_avaliacao, ds_genero, nr_estoque , bt_disponivel, ds_descricao)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [resposta] = await conexao.query(comando, [produto.nome, produto.preco, produto.avaliacao, produto.genero, produto.estoque, produto.disponivel, produto.descricao]);
    produto.id = resposta.insertId;

    return produto;
}

export async function CadastrarImagensProduto(imagem, id, campo) {
    const comando = `
    UPDATE tb_produto
    SET ${campo} = ?
    WHERE id_produto = ?`
 
    const [linhas] = await conexao.query(comando, [imagem, id])
    return linhas.affectedRows;
}

export async function ListarProdutos (){
    const comando = `SELECT nm_produto, vl_preco, nr_avaliacao, ds_descricao
    FROM tb_produto`;

    const [linhas]=await conexao.query(comando);
    return linhas;
}

