import React, {useState} from 'react';
import Logo from '../../assets/powerfit.png'
import './styles.css'
import {Link,useHistory } from 'react-router-dom'
import api from '../../services/api';
import {FiLoader} from 'react-icons/fi'

export default function Cadastro(){
    const [id,setId] =useState('');
    const [cadastro,setCadastro]= useState('');
    const [senha,setSenha]= useState('');
    const [loading,setLoading] = useState(false);
    const history = useHistory();
   async function handleCadastro(){

    if(cadastro.length < 1) return null

    if(!loading){
        setLoading(true);
        
        try {
            const response = await api.post('/cadastro',{nome: cadastro, senha: senha})
           
            alert('Cadastro com sucesso')
            history.push('/inicial')
        } catch (error) {
            alert('Falha no Cadastro')
        }

        setLoading(false);
    }
    else{
        alert('Espere um momento, ja está sendo feito um cadastro')
    }


    



        
    }

    function fichas () {
        if(loading){
           return <FiLoader style= {{width: 100, height: 100}}/>
        }
        else{

           /**  <div onClick= {handleCadastro} className="ficha">
                            <p className="fichaTipo">
                                Todos os exercicios
                            </p>
                        </div>
                        <div className="ficha">
                            <p className="fichaTipo">
                                Focado em perda de peso
                            </p>
                        </div>
                        <div className="ficha">
                            <p className="fichaTipo">
                                Focado em ganho de massa
                            </p>
                        </div>
                        <div className="ficha">
                            <p className="fichaTipo">
                                Ficha customizada
                            </p>
                        </div> */


            return(
                <div className="fichas">
                <div onClick= {handleCadastro} className="ficha">
                    <p className="fichaTipo">
                        Todos os exercicios
                    </p>
                </div>
                <div onClick = {fichaPerdaPeso} className="ficha">
                    <p className="fichaTipo">
                        Focado em perda de peso
                    </p>
                </div>
                <div onClick = {fichaGanhoMassa} className="ficha">
                    <p className="fichaTipo">
                        Focado em ganho de massa
                    </p>
                </div>
                <div onClick= {fichaCustom} className="ficha">
                    <p className="fichaTipo">
                        Ficha customizada
                    </p>
                </div>
            </div>

                        
            )
        }


    }

    async function fichaPerdaPeso(){
        if(cadastro.length < 1) return null
        if(!loading){
            setLoading(true);
            
            try {
                const response = await api.post('/cadastroPerdaPeso',{nome: cadastro, senha: senha})
               localStorage.setItem('AlunoId',response.data.id)
               localStorage.setItem('AlunoKey', cadastro)
                alert('Cadastro com sucesso')
                history.push('/inicial')
            } catch (error) {
                alert('Falha no Cadastro')
            }
    
            setLoading(false);
        }
        else{
            alert('Espere um momento, ja está sendo feito um cadastro')
        }
    }
    async function fichaGanhoMassa(){
        if(cadastro.length < 1) return null
        if(!loading){
            setLoading(true);
            
            try {
                const response = await api.post('/cadastroGanhoMassa',{nome: cadastro, senha: senha})
               localStorage.setItem('AlunoId',response.data.id)
               localStorage.setItem('AlunoKey', cadastro)
                alert('Cadastro com sucesso')
                history.push('/inicial')
            } catch (error) {
                alert('Falha no Cadastro')
            }
    
            setLoading(false);
        }
        else{
            alert('Espere um momento, ja está sendo feito um cadastro')
        }
    }

    async function fichaCustom(){
        if(cadastro.length < 1) return null        
    if(!loading){
        setLoading(true);
        
        try {
            const response = await api.post('/cadastroNulo',{nome: cadastro, senha: senha})
           localStorage.setItem('AlunoId',response.data.id)
           localStorage.setItem('AlunoKey', cadastro)
            alert('Cadastro com sucesso')
            history.push('/EditFicha')
        } catch (error) {
            alert('Falha no Cadastro')
        }

        setLoading(false);
    }
    else{
        alert('Espere um momento, ja está sendo feito um cadastro')
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
                Cadastro de Aluno
            </h1>


            <div className="cadastro">
                    <form   className="loginSenha">
                        <div className="usuario">
                            <p className="labelUsuario">Usuario:</p>
                            <input
                             type="text"
                            className="inputUsuario"
                            value = {cadastro}
                            onChange = {e => setCadastro(e.target.value)}
                            />
                        </div>
                        <div className="senha">
                            <p className="labelSenha">
                                Senha:
                            </p>
                            <input 
                             type="password" 
                             className="inputSenha"
                             value = {senha}
                             onChange = {e => setSenha(e.target.value)}
                             />
                        </div>
                        
                        
                    </form>

                   {fichas()}

            </div>
        


    </div>
    
    )
}