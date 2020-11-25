import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity , Share} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

//import Share from 'react-native-share';


// import { Container } from './styles';


function teste(){
    const shareOptions = {
        title: 'Share via',
        message: 'Some msg',
        url: 'Ola, estou testando a função de compartilhamento via Facebook!',
        subject: 'Subject'    
    }

    function compartilhar(){
        Share.share(shareOptions)
    }

    const navigation = useNavigation()

    return(<View style ={styles.container}>
        <Header title= 'Teste' navigation = {navigation} login = {navigation} />

        <TouchableOpacity onPress = {compartilhar}>
            <Text>Share</Text>
        </TouchableOpacity>

    </View>)
}

export default teste;
