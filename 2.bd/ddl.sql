create database dbvgn_shoes;
use dbvgn_shoes;



create table tb_cartao (
    id_cartao          int primary key auto_increment,
    nm_cartao          varchar(200),
    nm_pessoa          varchar(200),
    nr_cartao          varchar(16),
    nr_cvc             int,
    dt_validade        date
);

create table tb_cliente (
    id_cliente          int primary key auto_increment,
    id_cartao           int,
    nm_cliente          varchar(100),
    ds_CPF              varchar(15),
    ds_nascimento      	varchar(100),
    ds_email            varchar(100),
    ds_senha            varchar(100),
    ds_img_cliente		varchar(500),
    foreign key (id_cartao) references tb_cartao(id_cartao)
);

create table tb_endereco (
    id_endereco         int primary key auto_increment,
    id_cliente          int,
    ds_Cep              varchar(10),
    ds_estado           varchar(100),
    ds_cidade           varchar(100),
    ds_rua              varchar(200),
    ds_bairro           varchar(100),
    ds_numero           varchar(10),
    foreign key (id_cliente) references tb_cliente(id_cliente)
);

create table tb_pedido (
    id_pedido           int primary key auto_increment,
    id_endereco         int,
    id_cartao           int,
    ds_nota_fiscal      varchar(100),
    qtd_parcelas        int,
    dt_pedido           date,
    ds_situacao         varchar(100),
    ds_pagamento        varchar(100),
    foreign key (id_endereco) references tb_endereco(id_endereco),
    foreign key (id_cartao) references tb_cartao(id_cartao)
);

create table tb_produto (
    id_produto          int primary key auto_increment,
    nm_produto          varchar(200),
    vl_preco            decimal(10,2),
    nr_avaliacao        decimal(5,2),
    ds_genero           varchar(50),
    nr_estoque          int,
    bt_disponivel       boolean,
	ds_descricao		varchar(500),
    ds_imagem1			varchar(500),
    ds_imagem2			varchar(500),
    ds_imagem3			varchar(500),
    ds_imagem4			varchar(500)
);

create table tb_tamanho (
    id_tamanho          int primary key auto_increment,
    id_produto          int,
    vl_tamanho          int,
    foreign key (id_produto) references tb_produto(id_produto)
);

create table tb_modelo (
    id_modelo           int primary key auto_increment,
    id_produto          int,
    DS_MODELO           varchar(50),
    foreign key (id_produto) references tb_produto(id_produto)
);

create table tb_cor (
    id_cor              int primary key auto_increment,
    id_produto          int,
    ds_cor              varchar(50),
    foreign key (id_produto) references tb_produto(id_produto)
);

create table tb_produto_item (
    id_produto_item    int primary key auto_increment,
    id_produto         int,
    id_pedido          int,
    nr_qtdItem         int,
    foreign key (id_produto) references tb_produto(id_produto),
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

create table tb_login_adm(
	id_adm				int primary key auto_increment,
    nm_nome_adm			varchar(100),
    nm_login			varchar(100),
    ds_senha			varchar(100)
);

select * from tb_login_adm;

select * from tb_produto;

-- drop database dbvgn_shoes;