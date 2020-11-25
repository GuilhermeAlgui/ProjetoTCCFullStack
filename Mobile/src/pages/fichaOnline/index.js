import React, {Component,useState,useEffect} from 'react';
import {Text, View, Button, FlatList ,Picker} from 'react-native';
import Header from '../../components/Header';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function FichaOnline () {

  const [exercicios,setExercicios] = useState([]);
  const [aluno,setAluno] = useState('');
  const [exercicio,setExercicio] = useState('');


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

  async function loadExercicio(){
   

  let response;

  

  const usuario = await AsyncStorage.getItem('Aluno')


  try {
    response = await api.get(`ficha/${usuario}`);
    setExercicios([...exercicios, ...response.data]);
    console.log(exercicios)

  } catch (error) {
    alert('Deu ruim')
  }
   


  


  }

  useEffect(() =>{
    loadExercicio()
  },[])


  const navigation = useNavigation();
  navegar = () =>{
   
    navigation.navigate('App');
  };


  renderItem = ({item: exercicioList})=>{
        if(exercicioList.tipo=== exercicio){
          return(<View style = {styles.exercicioContainer} >
             <Text style = {styles.exercicioItemNome}>{exercicioList.nome}</Text>
        <Text style = {styles.exercicioItemSerie}>{exercicioList.serie}</Text>
        <Text style = {styles.exercicioItemRepeticoes}>{exercicioList.repeticao}</Text>
        <Text style = {styles.exercicioItemCarga}>{exercicioList.carga}</Text>

            
          </View>)
        }
        
        return(<View/>)
        
        
  }

  async function salvarFicha(){
    if(exercicios !== null){
      try {
        await AsyncStorage.setItem('fichaSalva',JSON.stringify(exercicios))
         alert('Ficha foi salva com sucesso!')
      } catch (error) {
        alert('Não foi possivel salvar a ficha, tente novamente depois')
      }
    }
    else{
      alert('Sistema offline')
    }
    
  }
 
    return (
      <View style = {{flex:1}}>
       
       <Header onPress ={navegar} login= {navigation} navigation={navigation} title= 'Ficha Online'/>
       <TouchableOpacity onPress={salvarFicha} style ={styles.salvaItem}>
          <Text>Salvar Ficha</Text>
       </TouchableOpacity>
       <RNPickerSelect
        onValueChange = {(itemValue,itemIndex) =>
        setExercicio(itemValue)}
        items ={TipoExercicio}
        />
        <View style = {styles.listaItem}>
          <View style = {{flexDirection:'row'}}>
          <Text style = {styles.exercicioTitle}>Exercicio</Text>
            <Text style = {styles.exercicioSerie}>Series</Text>

            <Text style = {styles.repeticoesTitle}>Rep</Text>
            <Text style = {styles.exercicioCarga}>Carga</Text>
            </View>
        </View>
      <FlatList
      data = {exercicios}
      renderItem = {renderItem}
      keyExtractor = {item => item.nome}
      />


      </View>
    );
  
}
