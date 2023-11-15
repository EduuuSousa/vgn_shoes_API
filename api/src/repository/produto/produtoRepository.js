import { query } from "express";
import conexao from "../connection.js";

export async function CadastrarProduto(produto) {


    try {
        console.log("Iniciando a função CadastrarProduto");
        // Restante do código...
        const comando = `INSERT INTO tb_produto (    
        nm_produto,
        vl_preco,
        nr_avaliacao,
        ds_genero,
        nr_estoque,
        bt_disponivel,
        ds_descricao,
        ds_forro,
        ds_solado,
        ds_palmilha,
        ds_imagem1,
        ds_imagem2,
        ds_imagem3,
        ds_imagem4 )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const [dados] = await conexao.query(comando, [
            // valores...   
            produto.nome,
            produto.preco,
            produto.avaliacao,
            produto.genero,
            produto.estoque,
            produto.disponivel,
            produto.descricao,
            produto.forro,
            produto.solado,
            produto.palmilha,
            produto.imagem1,
            produto.imagem2,
            produto.imagem3,
            produto.imagem4
        ]);

        console.log("Produto cadastrado com sucesso:", dados);

        produto.id = dados.insertId;
        return produto;
    }
    catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        throw error;
    }


      
    }
