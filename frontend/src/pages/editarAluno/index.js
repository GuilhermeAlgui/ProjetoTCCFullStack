import React, {useState} from 'react';
import Logo from '../../assets/powerfit.png'
import './styles.css'
import {Link,useHistory, RouteProps } from 'react-router-dom'
import api from '../../services/api';
import {FiLoader} from 'react-icons/fi'

export default function Cadastro(){
    const [id,setId] =useState('');
    const [cadastro,setCadastro]= useState('');
    const [senha,setSenha]= useState('');
    const [novaSenha,setNovaSenha] = useState('');
    const [loading,setLoading] = useState(false);
    const [carregado,setCarregado] = useState(false);
    const history = useHistory();
   async function handleUpdate(){
    if(cadastro.length < 1) return null

    if(senha !== novaSenha) return alert('Senha Errada')

    if(!loading){
        setLoading(true);
        
        try {
            const response = await api.put('/editAluno',{nome: cadastro, senha: senha, id: id})
           
            alert('Atualização feita com sucesso')
            history.push('/inicial')

        } catch (error) {
            alert('Falha na Atualização')
        }

        setLoading(false);
    }
    else{
        alert('Espere um momento, ja está sendo feito uma atualização')
    }


    



        
    }

    function logout(){
        localStorage.clear();
        history.push('/')
    }

    async function masterHandler(){
        if (!carregado){
            setCarregado(true)
            const a = await localStorage.getItem('AlunoKey')
            setCadastro(a)
            const i = await localStorage.getItem('AlunoId');
            setId(i)
        }

        
    }
    function inicial(){

        history.push('/inicial')
    }
    masterHandler()
    return(
    <div className="cadastroContainer">
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
            


            <div className="cadastro">
                    <form   className="loginSenha">
                        <div className="usuario">
                            <p className="labelUsuario">Novo usuario:</p>
                            <input
                             type="text"
                            className="inputUsuario"
                            value = {cadastro}
                            onChange = {e => setCadastro(e.target.value)}
                            />
                        </div>
                        <div className="senha">
                            <p className="labelSenha">
                                Nova senha:
                            </p>
                            <input 
                             type="password" 
                             className="inputSenha"
                             value = {senha}
                             onChange = {e => setSenha(e.target.value)}
                             />
                        </div><div className="senha">
                            <p className="labelSenha">
                                Confirmar senha:
                            </p>
                            <input 
                             type="password" 
                             className="inputSenha"
                             value = {novaSenha}
                             onChange = {e => setNovaSenha(e.target.value)}
                             />
                        </div>
                        
                        
                    </form>

                    <div onClick= {handleUpdate} className="ficha">
                    <p className="fichaTipo">
                    Atualizar
                    </p>
                </div>

            </div>
        


    </div>
    
    )
}