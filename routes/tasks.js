module.exports = app => {

const Tasks = app.db.models.Tasks,

app.route("/tasks")

.all ((req, res, next) => {
	//Middleware de pre-execucao das rotas
	delete req.body.id;
	next();
})
.get ((req, res) => {
	//"/tasks": lsita de tarefas
	Tasks.findAll({})
	//retorna o resultado da lista
	.then (result => res.json(result))
	//retorna o erro caso nao consiga listar
	.cath(error => {
		res.status(412).json({msg: error.message});
	});
})
.post((req, res) => {
	//"tasks": Cadastra um nova tarefa
	Tasks.create(req.body)
	.then(result => res.josn(result))
	.cath(error => {
		res.status(412).json({msg: error.message});
	});
});
app.route("/tasks/:id")
.all((req, res, next) => {
	// Middleware de pre-execuçao das rotas
	delete req.body.id;
	next();

})
.get((req,res) => {
	// "/tasks/1": Consulta uma tarefa
	Tasks.findOne({where: re.params})
	.then(result => {
		if (result){
			res.json(result);
		}else{
			res.sendStatus(404);
		}
	})
	.catch(error => {
		res.status(412).json({msg: error.message});
	})
})
.put((req, res) => {
	// "/tasks/1": Atualiza uma tarefa
	Tasks.updata(req.body, {where: req.params})
	.then(result => res.sendStatus(204))
	.catch(error => {
		res.status(412).json({msg: error.message});
	})
})
.delete((req, res) => {
	// "/tasks/1": Excluir uma tarefa
	Tasks.destroy({where: req.params})
	.then(result => res.sendStatus(204))
	.catch(error => {
		res.status(412).json({msg: error.message});
	})
});
};