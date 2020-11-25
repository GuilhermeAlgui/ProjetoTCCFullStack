import React, {Component, useState, useEffect} from 'react';
import {Text, View, Button, FlatList ,Picker} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import Ficha from '../../ficha';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-community/async-storage';


export default function Teste() {
  
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

  const navigation = useNavigation();
  navegar = () =>{
   
    navigation.navigate('App');
  };
  async function loadExercicio(){
   
    try {
      const aluno1 = await AsyncStorage.getItem('Aluno')
      setAluno(aluno1)
      const fichaSalva = await AsyncStorage.getItem('fichaSalva');
      setExercicios([...exercicios, ...JSON.parse(fichaSalva)]);
      
    } catch (error) {
      alert('Não existe Ficha Salva')
    }
    }
 
  useEffect(() =>{
    loadExercicio()
  },[])


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

  const renderExercicio = ({item}) => {
    return(
      <View style = {styles.exercicioContainer} >
        <Text style = {styles.exercicioItemNome}>{item.nome}</Text>
        <Text style = {styles.exercicioItemSerie}>{item.series}</Text>
        <Text style = {styles.exercicioItemRepeticoes}>{item.repetições}</Text>
        <Text style = {styles.exercicioItemCarga}>{item.carga}</Text>
      </View>
    )
  }

  


    return (
    
      
      <View style = {{flex: 1}}>
       
       <Header title= {aluno} login= {navigation} navigation={navigation}/>
       

        

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
        
 