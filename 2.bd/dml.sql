insert into tb_tarefa 
						( ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro)
values
						( ?, ?, ?, ? ,? ) ;
                        

update tb_tarefa
			set ds_tarefa = ?,
				nr_ordem = ?,
                bt_finalizado = ?,
                dt_cadastro = ?
                
		  where id_tarefa = ?;
          
          
delete from tb_tarefa
	  where id_tarefa = ?;