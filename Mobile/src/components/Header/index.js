import React from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';





import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';

navegar = (navigation) => {
  navigation.navigate('App');
};

async function deslogar  (navigation) {
  await AsyncStorage.setItem('Aluno', '');
  await AsyncStorage.setItem('fichaSalva','')
  navigation.navigate('Login');
}

function retornarJSX (navigation) {
  if(navigation != null){
    return(<TouchableOpacity onPress ={()=>{navegar(navigation)}}>
    <Text>Return</Text>
  </TouchableOpacity>)
  }
  else{
    return(<TouchableOpacity onPress ={()=>{}}>
    </TouchableOpacity>)
  }

} 



const Header = ({title, navigation = null, login = null}) => (
  <View style={styles.container}>
    <StatusBar barStyle= 'dark-content'/>
    <TouchableOpacity onPress={() => {deslogar(login)}} style={styles.left}>
      <Text>Logout</Text>
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    {retornarJSX(navigation)}
    
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
