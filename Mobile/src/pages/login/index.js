import React, {Component, useState} from 'react';
import {Text, View, Button, FlatList ,Picker,TextInput, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import Ficha from '../../ficha';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';



export default function Teste() {
  const [usuario,setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loading,setLoading] = useState(false);


  const navigation = useNavigation();

  function teste(){

  }

  async function acesso(){

    setLoading(true);


    const data = {
      user : usuario,
      password: senha,
    }
    try {
      const response = await api.post('login',data)
      console.log(response.data)

      const {veri} = response.data

      if(veri){
        await AsyncStorage.setItem('Aluno', response.data.nome);
        const a = await AsyncStorage.getItem('Aluno');
        console.log(a)
       
        navigation.navigate('App')
      }
      else{
        alert('Usuario ou senha Incorretos')
      }


    } catch (error) {
      alert('Não foi possivel conectar')
    }
  }

  async function logado() {
    const item = await AsyncStorage.getItem('Aluno')

    if(item === null){

    }
    else{
      navigation.navigate('App')
    }

  }

 // logado()
  function toInfo(){
    navigation.navigate('InfoOffline')
  }

function comoCadastrar(){
  alert('Para cadastrar entre em contato com um dos funcionarios da academia')
}

  
  return(
  <View style={styles.pagina}>
    <View style={styles.container}>
      <Text style = {styles.containerTitulo}>
        Academia PowerFit
      </Text>
      <View style = {styles.containerUsuario}>
          <Text style = {styles.containerUsuarioLabel}>Usuario:</Text>
          <TextInput placeholder= 'Usuario' value={usuario} onChangeText={text=> setUsuario(text)} style = {styles.containerUsuarioInput}></TextInput>
      </View>
      <View style = {styles.containerSenha}>
          <Text style = {styles.containerSenhaLabel}>Senha:</Text>
          <TextInput value={senha} onChangeText= {text => setSenha(text)} secureTextEntry= {true}  style = {styles.containerSenhaInput}></TextInput>
      </View>
      <View style = {styles.containerButtons}>
        <TouchableOpacity onPress={()=> toInfo()} style = {styles.containerButtonsButtom}>
          <Text style={styles.containerButtonsButtomText}>
            Academia
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> comoCadastrar()} style = {styles.containerButtonsButtom}>
          <Text style={styles.containerButtonsButtomText}>
            Como Cadastrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>acesso()} style = {styles.containerButtonsButtom}>
          <Text style={styles.containerButtonsButtomText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>

  </View>
  )
  
}
        
 