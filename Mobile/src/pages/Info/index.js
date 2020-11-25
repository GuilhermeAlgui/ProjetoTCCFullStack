import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import { colors } from '../../styles';
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function Info() {
  const navigation = useNavigation()
  navegar = () => {
    navigation.navigate('App');
  };
    return (
      
      <View style={styles.main}>
        <Header title="Pacotes" login= {navigation} navigation={navigation} />
 
        <View style={styles.container}>
          <View style={styles.containerMensal}>
            <View style={styles.mensalTitle}>
              <Text style={styles.itemTitle}> Mensal</Text>
            </View>
            <View style={styles.mensalItem}>
              <Text style= {styles.creditoMensal}>Débito</Text>
              <Text style={styles.itemText}>60,00</Text>
              <Text style= {{color: 'transparent'}}>Débito</Text>

            </View>
            <View style={styles.mensalItem}>
            <Text style={styles.creditoMensal}>Crédito</Text>
              <Text style={styles.itemText}>65,00</Text>
              <Text style= {{color: 'transparent'}}>Débito</Text>

            </View>
          </View>
          <View style={styles.containerTrimestral}>
          <View style={styles.trimestralTitle}>
              <Text style={styles.itemTitle}> Trimestral</Text>
            </View>
            <View style={styles.trimestralItem}>
            <Text style= {styles.creditoMensal}>Débito</Text>
              <Text style={styles.itemText}>50,00</Text>
              <Text style={styles.promoteTotal}> 150,00 - 3 meses</Text>

            </View>
            
            <View style={styles.trimestralItem}>
            <Text style={styles.creditoMensal}>Crédito</Text>

              <Text style={styles.itemText}>55,00</Text>
              <Text style={styles.promoteTotal}> 165,00 - 3 meses</Text>

            </View>
          </View>
          <View style={styles.containerSemestral}>
            <View style={styles.semestralTitleBox}>
              <Text style={styles.semestralTitle}> Semestral</Text>
            </View>
            <View style={styles.semestralItem}>
            <Text style= {styles.credito}>Débito</Text>
              <Text style={styles.semestralText}>40,00</Text>
              <Text style={styles.promoteSemestral}> 252,00 - 6 meses</Text>
            </View>
            <View style={styles.semestralItem}>
            <Text style={styles.credito}>Crédito</Text>

              <Text style={styles.semestralText}>45,00</Text>
              <Text style={styles.promoteSemestral}> 270,00 - 6 meses</Text>
            </View>
          </View>
        </View>
      </View>
    );
  
}
