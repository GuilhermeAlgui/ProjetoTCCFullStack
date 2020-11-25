/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';



export default function App() {
  const navigation = useNavigation();  

 /**  const Todo[] =[{id: 0, text: 'Academia Power Fit'},
    {id: 1, text: 'Fichas Salvas'},
    {id: 2, text: 'Fichas do sistema'},]
*/
  
  const Todo = [{id: 0, text: 'Academia Power Fit'},
  {id: 1, text: 'Fichas Salvas'},
  {id: 2, text: 'Fichas do sistema'},]

  renderItem = ({item}) => {
    return(<TouchableOpacity style = {styles.optionContainer} onPress= {() => pagina(item.id)}>
      <Text style = {styles.optionText}>{item.text}</Text>
    </TouchableOpacity>)
  }


  pagina = (id) => {
    switch (id){
      case 0:
        navigation.navigate('Info');
        break;
      case 1:
        navigation.navigate('FichaSalva');
        break;
      case 2:
        navigation.navigate('FichaOnline');
        break;
        
      
      
      
    }

  
  };

  /**addItem = () => {
    this.setState({
      Todo: [...this.state.Todo, {id: Math.random(), text: 'Novo Texto'}],
    });
  };*/

  // <Header title= 'Academia PowerFit'/>

  
    return (
      <View style={{flex: 1}}>
        <Header title="Academia" login= {navigation} />
        <View style={styles.container}>
          <View style = {styles.listContainer}>
          <TouchableOpacity style = {styles.optionContainer} onPress= {() => pagina(0)}>
      <Text style = {styles.optionText}>Preços Academia</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.optionContainer} onPress= {() => pagina(1)}>
      <Text style = {styles.optionText}>Fichas Salvas</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.optionContainer} onPress= {() => pagina(2)}>
      <Text style = {styles.optionText}>Fichas no Sistema</Text>
    </TouchableOpacity>
          </View>

          
        </View>


     

      </View>
    );
  
}
/** <TouchableOpacity onPress= {() =>{navigation.navigate('teste')}}>
        <Text>Pagina de testes</Text>
      </TouchableOpacity> */