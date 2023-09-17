
create table tb_cliente (
	id_cliente          int primary key auto_increment
	nm_cliente          varchar(100)
	ds_CPF              varchar(100)
	dt_nascimento       date
	ds_email            varchar(100)
	ds_senha            varchar(100)
	id_cartao           int > tb_cartao.id
)

tb_endereco {
	id_endereco         int primary key auto_increment
	id_cliente          integer *>* tb_cliente.id_cliente
	ds_estado           varchar(400)
	ds_cidade           varchar(400)
	ds_rua              varchar(400)
	ds_bairro           varchar(400)
	ds_numero           int
}

tb_pedido {
	id_pedido           int primary key auto_increment
	id_endereco         int *> tb_endereco.id_endereco
	nr_perdido          integer
	ds_nota_fiscal      varchar(100)
	qtd_parcelas        integer
	dt_pedido           date
	ds_situacao         varchar(100)
	ds_pagamento        varchar(100)
}

tb_produto {
	id_produto          int primary key auto_increment
	nm_produto          varchar(200)
	vl_preco            decimal(12,2)
	nr_avaliacao        int
	ds_genero           varchar(200)
	nr_estoque          int
	bt_disponivel       boolean
	bt_destaque         boolean
	bt_promocao         boolean
	vl_precopromocao    decimal(12,2)
}

tb_tamanho {
	id_tamanho          int primary key auto_increment
	id_produto          int >* tb_produto.id_produto
	vl_tamanho          int
}

tb_modelo {
	id_modelo           int primary key auto_increment
	id_produto          int >* tb_produto.id_produto
	DS_MODELO           varchar(200)
}

tb_cor {
	id_cor              int primary key auto_increment
	id_produto          int >* tb_produto.id_produto
	ds_cor              varchar(200)
}

tb_produto_item {
	id_produto_item    int primary key auto_increment
	id_produto         int *>* tb_produto.id_produto
	id_pedido          int *>* tb_pedido.id_pedido
	nr_qtdItem         int
}

tb_imagem_produto {
	id_imagem          int primary key auto_increment
    id_produto          int >* tb_produto.id_produto
	ds_imagem          varchar(500)
}

tb_cartao {
	id                 int primary key auto_increment
	nm_cartao          varchar(200)
	nm_pessoa          varchar(200)
	nr_cartao          int
	nr_cvc             int
	nr_validade        int
}

