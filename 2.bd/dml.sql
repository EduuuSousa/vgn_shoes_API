	insert into  tb_cliente( nm_cliente, ds_CPF, dt_nascimento, ds_email, ds_senha)
					 values( ?, ?, ?, ?, ?)


	select		id_cliente as id
				nm_cliente as nome
				ds_CPF as CPF
				dt_nascimento as data_nasc
				ds_email as email
				ds_senha as senha
	from 		tb_cliente
	where		ds_email = ? 
	and			ds_senha = ?



	insert into tb_produto( nm_produto, vl_preco, nr_avaliacao, ds_genero, nr_estoque, bt_destaque, bt_disponivel, bt_promocao, vl_precopromocao )
					values( ?, ?, ?, ?, ?, ?, ?, ?, ?)

	update		 	tb_produto
	select			nm_produto = ? ,
					vl_preco = ? ,
					nr_avaliacao = ? ,
					ds_genero = ? ,
					nr_estoque = ? ,
					bt_destaque = ? ,
					bt_disponivel = ? ,
					bt_promocao = ? ,
					vl_precopromocao = ?
	where			id_produto = ?

	delete from		tb_produto
	where			id_produto = ?


	select 		id_produto as id
				nm_produto as produto
				vl_preco as preco
				nr_avaliacao as avaliacao
				ds_genero as genero
				nr_estoque as estoque
				bt_destaque as destaque
				bt_disponivel as disponivel
				bt_promocao as promocao 
				vl_precopromocao as preco_da_promocao
	from		tb_produto