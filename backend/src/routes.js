const express = require('express');
const connection = require('./database/connection')
const Aluno = require('./controllers/Aluno')


/** 
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');
*/

const routes = express.Router();


routes.get('/', async(req,res) =>{
    const alunos = await connection('aluno')
    .select('nome')
    .where({
        nome: '2512',
        senha: '4002',
    }

    );
    return res.json(alunos);   
})

routes.get('/first', async(req,res) => {
    const idExercicio = await connection('exercicio')
    .select('id')

    console.log(idExercicio[0])

    return res.json(idExercicio)
})


routes.post('/loginGerente/', async (req,res) =>{
    const {login, senha} = req.body.data;
    console.log(req.body)

    const gerente = await connection('Gerente')
    .select('nome','senha','codigoExtra')
    .where({
        nome: login,
        senha: senha
    })

    console.log(gerente[0])

    if(gerente.length === 1){
        const send = gerente[0]
        return res.json({send, veri : true})

    }
    else{
        return res.json({veri: false})
    }


})

 
routes.post('/cadastro/', Aluno.cadastro)

routes.post('/editFicha', Aluno.editFicha)

routes.get('/alunos', Aluno.index)

routes.post('/login',Aluno.alunoLogin)

routes.put('/editAluno', Aluno.editAluno)

routes.get('/ficha/:aluno',Aluno.ficha)

routes.get('/exercicios', Aluno.exercicioList)

routes.post('/cadastroNulo', Aluno.cadastroNulo)

routes.post('/cadastroPerdaPeso', Aluno.cadastroPP)
routes.post('/cadastroGanhomassa', Aluno.cadastroGM)

routes.post('/adicionarExercicio', Aluno.adicionarExercicio)

/** 


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index );
routes.post('/ongs/', OngController.create);

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete )
*/
module.exports = routes;
