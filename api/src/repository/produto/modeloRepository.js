import { conexao } from "../connection.js";


export async function InserirModelo( modelo ){
    const comando= `    insert into tb_modelo( id_produto, ds_modelo)
                                       values( ?, ?)`

    let [ dados ]= await conexao.query( comando, [
        modelo.idProduto,
        modelo.modelo
    ])
    modelo.id= dados.insertId

    return modelo
}

export async function AlterarModelo( modelo, id){
    const comando= `    update      tb_modelo
                        set         id_produto = ?
                                    ds_modelo = ?
                        where       id_modelo = ?`
                
    let [ dados ]= await conexao.query( comando, [
        modelo.idProduto,
        modelo.modelo,
        id
    ])
    let linha= dados.affectedRows;
    return linha
}

export async function ExcluirModelo( id ){
    const comando= `    delete 
                        from        tb_modelo
                        where       id_modelo = ?`
        
    let [ dados ] = await conexao.query( comando, [ id ]) 
    let linha = dados.affectedRows;
    return linha;
}

export async function consultarPorModelo(){
    const comando= ` select     id_modelo as id
                                id_produto as produto
                                ds_modelo as modelo`

    let [ dados ] = await conexao.query( comando )
    return dados
}