import React, { Component } from 'react';

import { View } from 'react-native';

// import { Container } from './styles';

export default class Info extends Component {
  render() {
    return (
        <View style={styles.main}>
        <Header title="Pacotes" />

        <View style={styles.container}>
          <View style={styles.containerMensal}>
            <Text style= {styles.itemTitle}> Mensal: </Text>
            <Text style = {styles.itemText}>R$60,00</Text>
            <View style= {{flexDirection: 'row'}}>
                <Text style= {styles.credito}>Crédito</Text>
                <Text style = {styles.itemText}>R$65,00</Text>
            </View>
          </View>
          <View style={styles.containerMensal}>
            <View style={styles.trimestralTitle}>
              <Text style={styles.itemTitle}> Trimestral</Text>
            </View>
            <View style={styles.trimestralItem}>
              <Text style={styles.itemText}>50,00</Text>
              <Text style={styles.promoteTotal}> 150,00 - 3 meses</Text>
            </View>
            <Text style={styles.credito}>Crédito</Text>
            <View style={styles.trimestralItem}>
              <Text style={styles.itemText}>55,00</Text>
              <Text style={styles.promoteTotal}> 165,00 - 3 meses</Text>
            </View>
          </View>
          <View style={styles.containerMensal}>
            <View style={styles.semestralTitleBox}>
              <Text style={styles.semestralTitle}> Semestral</Text>
            </View>
            <View style={styles.semestralItem}>
              <Text style={styles.semestralText}>50,00</Text>
              <Text style={styles.promoteTotal}> 150,00 - 3 meses</Text>
            </View>
            <Text style={styles.credito}>Crédito</Text>
            <View style={styles.semestralItem}>
              <Text style={styles.semestralText}>55,00</Text>
              <Text style={styles.promoteTotal}> 165,00 - 3 meses</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
