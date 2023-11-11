import conexao  from "../connection.js";

export async function InserirImagem(caminhoImagem) {
  const comando = `insert into tb_produto (ds_imagem) values (?)`;

        let [dados] = await conexao.query(comando, [caminhoImagem]);

        return dados.affectedRows;  
}

export async function AlterarImagem(imagem, id) {
    const comando = `UPDATE tb_imagem_produto
                     SET ds_imagem = ?
                     WHERE id_imagem = ?`;

    try {
        const [dados] = await conexao.query(comando, [
            imagem,
            id,
        ]);
        const linha = dados.affectedRows;
        return linha;
    } catch (error) {
        throw new Error('Erro ao alterar a imagem no banco de dados: ' + error.message);
    }
}

export async function ExcluirImagem(id) {
  const comando = `    delete
                        from        tb_imagem_produto
                        where       id_imagem = ?`;

  let [dados] = await conexao.query(comando, [id]);
  let linha = dados.affectedRows;
  return linha;
}

export async function consultarImagens(id) {
  const comando = `    select      id_imagem as id
                                    id_produto as produto
                                    ds_imagem as imagem
                        from        tb_imagem_produto
                        where       id_produto = ?;`;

  let [dados] = await conexao.query(comando, [id]);
  return dados;
}
