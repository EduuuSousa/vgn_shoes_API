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

export async function ProdutosInfo(id) {
    const command = `
    SELECT 
           id_produto      Id,
           nm_produto      Nome, 
           ds_genero       Gênero, 
           ds_material     Material, 
           ds_categoria    Categoria, 
           ds_gema         Gema, 
           nr_preco        Preço, 
           ds_descricao    Descrição,
           ds_capa         Capa,
           ds_imagem1      Imagem1,
           ds_imagem2      Imagem2,
           ds_imagem3      Imagem3,
           ds_imagem4      Imagem4
    FROM tb_produto
    WHERE id_produto = ?`

    const [linhas] = await con.query(command, [id])
    return linhas[0];
};

