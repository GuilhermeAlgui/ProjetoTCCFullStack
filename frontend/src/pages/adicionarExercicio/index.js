import React, {useState} from 'react';
import Logo from '../../assets/powerfit.png'
import './styles.css'
import {Link,useHistory, RouteProps } from 'react-router-dom'
import api from '../../services/api';
import {FiLoader} from 'react-icons/fi'
import Select from 'react-select'


export default function Exercicio(){
    const [id,setId] =useState('');
    const [nome,setNome]= useState('');
    const [tipo,setTipo] = useState('');
    const [descricao,setDescricao]= useState('');
    const [novaSenha,setNovaSenha] = useState('');
    const [loading,setLoading] = useState(false);
    const [carregado,setCarregado] = useState(false);
    const history = useHistory();
    const TipoExercicio = [{
        label: 'Abdominal',
        value: 'Abdominal'
    },{
        value: 'Aerobico',
        label: 'Aerobico'
    
    },{
        value: 'Biceps/Antebraço',
        label: 'Biceps/Antebraço'
    
    },{
        value:'Costa',
        label:'Costa'
    
    },{
        value: 'Membros Inferiores',
        label: 'Membros Inferiores'
    
    },{
        value: 'Ombro/Trapezio',
        label: 'Ombro/Trapezio'
    
    },{
      value: 'Peitoral',
      label: 'Peitoral'
    
    },{
        value: 'Triceps'   , label: 'Triceps'
    
    },]
   async function handleUpdate(){
        try {
           const response = await api.post('/adicionarExercicio',{exercicio: nome ,tipo: tipo, descricao : descricao})
           alert('Exercicio adicionado')
        } catch (error) {
            alert('não foi possivel adicionar o exercicio')
        }


        
    }

    function logout(){
        localStorage.clear();
        history.push('/')
    }


    function inicial(){

        history.push('/inicial')
    }
    
    return(
    <div className="ExercicioContainer">
            <div className="cabecalho">
                <img onClick={inicial} src={Logo} alt="" className="logo"/>
                <p className="bemvindo">
                    Bem vindo a Academia Powerfit {localStorage.getItem('userNome')}
                </p>
                <p onClick = {logout} className="logout">
                    Log Out
                </p>
            </div>
            <h1 className="titulo">
               {localStorage.getItem('Aluno')}
            </h1>
            


            <div className="Exercicio">
                    <form   className="ExercicioItem">
                        <div className="ExercicioNome">
                            <p className="labelExercicio">Nome do Exercicio:</p>
                            <input
                             type="text"
                            className="inputExercicio"
                            value = {nome}
                            onChange = {e => setNome(e.target.value)}
                            />
                        </div>
                        <div className="ExercicioDescricao">
                            <p className="labelDescricao">
                               Descrição:
                            </p>
                            <textarea 
                             className="inputDescricao"
                             value = {descricao}
                             onChange = {e => setDescricao(e.target.value)}
                             />
                        </div>

                        <div className= "ExercicioDescricao">
                            <p className= "labelDescricao">Tipo do exercicio:</p>
                            <Select className= 'ComboBoxExercicio'
                              options= {TipoExercicio}
                               onChange= {e => setTipo(e.value)}
                                  />
                        </div>
                        
                        
                    </form>

                    <div onClick= {handleUpdate} className="ficha">
                    <p className="fichaTipo">
                    Criar exercicio
                    </p>
                </div>

            </div>
        


    </div>
    
    )
}