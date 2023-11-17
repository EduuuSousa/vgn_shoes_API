import conexao from "../connection.js";

export async function LoginAdm(login, senha){
    const comando = 'select * from tb_login_adm where nm_login = ? and ds_senha = ?';

    const [dados] = await conexao.query(comando , [login, senha])

    const r = dados.length;

    return r;
}

export async function CadastroAdm(login, senha){
    const comando = `insert into tb_login_adm (nm_login , ds_senha)
                                        values (?,?)`;
    const [dados] = await conexao.query(comando, [login, senha])
    
    return dados
    
}