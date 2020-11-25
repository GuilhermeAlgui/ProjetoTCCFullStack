const connection = require('../database/connection')

module.exports = {

    async cadastroPP(req,res){
        const {nome, senha} = req.body;
    
        const [id] = await connection('aluno')
        .insert({nome: nome, senha:senha});
    
        const idAluno = id;

        const exercicioL = [7,10,11,12,14,15,17,19,36,37,50,57,60,62]
        const exercicioAero = [3,25]

        for(let i = 0; i< exercicioL.length; i++){
            await connection('exercicio_ficha')
            .insert({ exercicio: exercicioL[i], ficha: idAluno, serie: 3, repeticao: 10})

        }
        for(let i = 0; i< exercicioAero.length; i++){
            await connection('exercicio_ficha')
            .insert({ exercicio: exercicioAero[i], ficha: idAluno, carga: 10})

        }

        return res.json({veri :true})
    },

    async cadastroGM(req,res){
        const {nome, senha} = req.body;
    
        const [id] = await connection('aluno')
        .insert({nome: nome, senha:senha});
    
        const idAluno = id;
        const exercicioL = [10,11,12,14,22,30,31,35,36,37,39,44,47,50,53,55,57,59,60,62,66]

        for(let i = 0; i< exercicioL.length; i++){
            await connection('exercicio_ficha')
            .insert({ exercicio: exercicioL[i], ficha: idAluno, serie: 3, repeticao: 12})

        }
        await connection('exercicio_ficha')
            .insert({ exercicio: 25, ficha: idAluno, carga: 10})
        
        return res.json({veri: true})
    }
    ,

    async cadastroNulo(req,res){
        const {nome, senha} = req.body;
    
        const [id] = await connection('aluno')
        .insert({nome: nome, senha:senha});
    
        const idAluno = id;

        return res.json({veri: true, id: idAluno})

    },


    async exercicioList(req,res){
        const exercicio = await connection('exercicio')
        .select('nome','tipo','id')
        .orderBy('tipo')

        return res.json(exercicio)
    },

    async index(req,res) {
        const aluno = await connection('aluno')
        .select('nome','id')

       return res.json(aluno)
    },

    async cadastro(req,res) {
        const {nome, senha} = req.body;
    
    const [id] = await connection('aluno')
    .insert({nome: nome, senha:senha});

    const idAluno = id;

    /**const {idAluno}  = await connection('aluno')
    .select('id as idAluno')
    .where('nome','=',nome)
    .first()*/

    const idExercicio = await connection('exercicio')
    .select('id')

    for(i = 0; i< idExercicio.length; i++){
        await connection('exercicio_ficha')
        .insert({exercicio: idExercicio[i].id, ficha: idAluno, serie: 3, repeticao: 10, carga: 2})
    }

    const fichaNova = await connection('exercicio_ficha')
    .join('aluno','exercicio_ficha.ficha','=','aluno.id')
    .join('exercicio','exercicio_ficha.exercicio','=','exercicio.id')
    .select('exercicio.nome','exercicio.tipo','exercicio_ficha.carga','exercicio_ficha.serie')
    .where('aluno.nome','=',nome)

    return res.json(fichaNova);
    },
    async adicionarExercicio(req,res){
        const {exercicio, tipo, descricao} = req.body;

        await connection('exercicio')
        .insert({nome: exercicio, tipo: tipo, descricao : descricao})

        return res.json({veri: true})


    }

    ,

    async editFicha(req,res){
        const {id, exercicios} = req.body
        console.log(`id: ${id}`)
        console.log(`exercicios ${exercicios}`)


        if (id === null || id === undefined)
        return res.json({veri: false})

        await connection('exercicio_ficha')
        .where('ficha',id)
        .del()
       // console.log(exercicios)
       console.log(exercicios)

       let i = 0;
        for(i = 0; i < exercicios.length; i++){
            console.log(i)
            await connection('exercicio_ficha')
            .insert({
                ficha: id,
                exercicio: exercicios[i].id,
                serie: exercicios[i].serie,
                repeticao: exercicios[i].repeticao,
                carga :exercicios[i].carga
            })

        }

        return res.json({veri: true})

    }

    ,
    async editAluno(req,res){

        const {nome,senha,id} = req.body

        const update = await connection('aluno')
        .where('id','=',id)
        .update({
            nome: nome,
            senha: senha
        })
        return res.json(update)

    },

    async ficha(req,res){
    const {aluno} = req.params;
    //console.log(aluno)
    const exercicios = await connection('exercicio_ficha')
        .join('aluno','exercicio_ficha.ficha','=','aluno.id')
        .join('exercicio','exercicio_ficha.exercicio','=','exercicio.id')
        .select('exercicio.nome','exercicio.tipo','exercicio_ficha.carga','exercicio_ficha.repeticao','exercicio_ficha.serie')
        .where('aluno.nome','=',aluno)

        return res.json(exercicios)

    },

    async alunoLogin(req,res){
        const {user , password} = req.body
        
        const aluno = await connection('aluno')
        .select('nome')
        .where({
            nome: user,
            senha : password

        })

        
        

        if(aluno.length ===1){
            const {nome} = aluno[0];

            return res.send({nome, veri: true})

        }
        else{
            return res.send({veri :false})
        }


    }
}