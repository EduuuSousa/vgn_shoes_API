use infoB_db;




create table tb_tarefa(
						id_tarefa				int primary key auto_increment not null,
                        ds_tarefa				varchar(400) not null,
                        nr_ordem				int not null unique,
                        bt_finalizado			boolean not null,
                        dt_cadastro				date not null
                        );
                        
