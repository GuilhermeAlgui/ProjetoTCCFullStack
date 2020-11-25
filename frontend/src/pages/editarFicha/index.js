import React, {useState} from 'react';
import Logo from '../../assets/powerfit.png'
import './styles.css'
import {Link,useHistory, RouteProps } from 'react-router-dom'
import api from '../../services/api';
import {FiLoader} from 'react-icons/fi'

export default function(){

    const [fichaNova, setFichaNova] = useState([{}]);
    const [tExercicios,setTExercicios] = useState([]);
    const [fichaAtual, setFichaAtual] = useState([]);
    const Aluno = localStorage.getItem('AlunoKey');
    const AlunoId = localStorage.getItem('AlunoId');
    const [carregamento,setCarregamento] = useState([true])
    const history = useHistory()

    const [atualizar,setAtualizar] = useState(true);

    async function masterHandler(){
        if(carregamento){
            console.log(carregamento)
            handleExercicios()
            handleFichaAtual()
            setCarregamento(false)   
        }

       // console.log(carregamento)
    }

    async function handleFichaNova(id){
        
        console.log(fichaNova)
        let add = true

        for(let i = 0; i < fichaNova.length; i++){
            if(id === fichaNova[i].id){
                add = false
            }

        }

        if(add)  setFichaNova([...fichaNova, {id: id, serie: 3, repeticao: 10,}]);
    
        tic();
        
    }
    

    function tic(){
        if(atualizar)setAtualizar(false)
        else setAtualizar(true)
    }


    async function handleExercicios(){

        const response = await api.get('exercicios');

        setTExercicios(response.data);

        

    }async function handleFichaAtual(){

        const response = await api.get(`Ficha/${Aluno}`)
        setFichaAtual(response.data)

    }
    
    

    function exercicioItens(){
        //console.log(tExercicios)
        return(
            tExercicios.map(exercicio => (
                <div className= 'editFichaItem' onClick = {id => handleFichaNova(exercicio.id)} className= 'editFichaItem' >
                    <p className= 'editFichaExercicioItemNome'>{exercicio.nome}</p>
                    <p className= 'editFichaExercicioItemTipo'>{exercicio.tipo}</p>
                </div>
            ))
        )

    }

    function FichaNovaItens(){
        return(
            tExercicios.map(exercicio =>{
                for(let i = 0; i< fichaNova.length; i++){
                    if(fichaNova[i].id === exercicio.id){
                        return(
                            <div className= 'editFichaItem' >
                    <p className= 'editFichaItemTextNome'>{exercicio.nome}</p>
                    <p className= 'editFichaItemTextTipo'>{exercicio.tipo}</p>
                    <input className= 'editFichaItemTextSerie'
                     value = {fichaNova[i].serie}
                     onChange = {e => { 
                          fichaNova[i].serie = parseInt(e.target.value)
                          tic();
                     }}
                     type="text" name="" id=""/>     
                     <input className= 'editFichaItemTextRepeticao'
                     value = {fichaNova[i].repeticao}
                     onChange = {e => { 
                          fichaNova[i].repeticao = parseInt(e.target.value)
                          tic();
                     }}
                     type="text" name="" id=""/>
                     <input className= 'editFichaItemTextCarga'
                     value = {fichaNova[i].carga}
                     onChange = {e => { 
                          fichaNova[i].carga = parseInt(e.target.value)
                          tic();
                     }}
                     type="text" name="" id=""/>            

                              </div>
                        )
                    }
                }

            })

        )

    }

    function FichaAntigaItens(){
        return(
            fichaAtual.map(ficha => (
                <div className= 'editFichaItem'>
                    <p className= 'editFichaItemTextNome'>{ficha.nome}</p>
                    <p className= 'editFichaItemTextTipo'>{ficha.tipo}</p>
                    <p className= 'editFichaItemTextSerie'>{ficha.serie}</p>
                    <p className= 'editFichaItemTextRepeticao'>{ficha.repeticao}</p>
                    <p className= 'editFichaItemTextCarga'>{ficha.carga}</p>


                </div>
            ))
        )

    }

    async function AtualizarFicha(){

        const data = {
            id: AlunoId,
            exercicios: fichaNova
        }

        console.log(data)
        try {
           const response =  await api.post('editFicha', data)
            alert('Ficha Atualizada!')
            history.push('/inicial')
    
        } catch (error) {
            alert('Não foi possivel atualizar a ficha!')
        }
        
    }

    function logout(){
        localStorage.clear();
        history.push('/')
    }

    masterHandler()

    function inicial(){

        history.push('/inicial')
    }

    return(
        
    <div className= 'editFichaMain'>
         <div className="cabecalho">
                <img onClick={inicial} src={Logo} alt="" className="logo"/>
                <p className="bemvindo">
                    Bem vindo a Academia Powerfit {localStorage.getItem('userNome')}
                </p>
                <p onClick = {logout} className="logout">
                    Log Out
                </p>
            </div>
            <h1 className = "editFichaAlunoNome">
                {Aluno}
            </h1>
    <div className = 'editFichaContainer' >
      
      <div className = 'editFichaListVelha'>
        <p className = 'editFichaListTitle'>Velha</p>
        <div className="editFichaListItensTitle">
            <p className= "editFichaItemTextNome">Exercicio</p>
            <p className="editFichaItemTextTipo">Tipo</p>
            <p className="editFichaItemTextSerie">Serie</p>
            <p className="editFichaItemTextRepeticao">Rep</p>
            <p className="editFichaItemTextCarga">Carga</p>   
            
            </div> 
        {FichaAntigaItens()} 
        </div>
      <div className = 'editFichaListTudo'>
        <p className = 'editFichaListTitle'>Tudo</p>
        <div className="editFichaListItensTitle">
            <p className= "editFichaExercicioItemNome">Exercicio</p>
            <p className="editFichaExercicioItemTipo">Tipo</p>
            
            
            </div> 
         
          {exercicioItens()} </div>
      <div className = 'editFichaList'>
          <p className = 'editFichaListTitle'>Novo</p>
          <div className="editFichaListItensTitle">
            <p className= "editFichaItemTextNome">Exercicio</p>
            <p className="editFichaItemTextTipo">Tipo</p>
            <p className="editFichaItemTextSerie">Serie</p>
            <p className="editFichaItemTextRepeticao">Rep</p>
            <p className="editFichaItemTextCarga">Carga</p>   
            
            </div> 
          
          {FichaNovaItens()}</div>

      <button className='botaoEditFicha' onClick = {AtualizarFicha}> Atualizar Ficha</button>
    </div>
    </div>
    
    
    )
    

}