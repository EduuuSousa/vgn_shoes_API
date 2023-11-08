import { conexao } from "../connection.js";


export async function InserirImagem(idProduto, caminhoImagem) {
    const comando = `insert into tb_imagem_produto (id_produto, ds_imagem) values (?, ?)`;

    try {
        let [dados] = await conexao.query(comando, [idProduto, caminhoImagem]);
        const imagem = {
            id: dados.insertId,
            idProduto: idProduto,
            imagem: caminhoImagem
        };
        return imagem;
    } catch (error) {
        throw new Error('Erro ao inserir imagem no banco de dados');
    }
}


export async function AlterarImagem(imagem, id) {
    const comando = `    update      tb_imagem_produto
                        set         id_produto = ?
                                    ds_imagem_produto = ?
                        where       id_imagem = ?`

    let [dados] = await conexao.query(comando, [
        imagem.idProduto,
        imagem.imagem,
        id
    ])
    let linha = dados.affectedRows;
    return linha
}

export async function ExcluirImagem(id) {
    const comando = `    delete
                        from        tb_imagem_produto
                        where       id_imagem = ?`

    let [dados] = await conexao.query(comando, [id])
    let linha = dados.affectedRows;
    return linha
}

export async function consultarImagens(id) {
    const comando = `    select      id_imagem as id
                                    id_produto as produto
                                    ds_imagem as imagem
                        from        tb_imagem_produto
                        where       id_produto = ?;`

    let [dados] = await conexao.query(comando, [id])
    return dados;
}