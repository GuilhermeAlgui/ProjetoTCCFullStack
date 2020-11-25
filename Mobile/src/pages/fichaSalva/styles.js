import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';
import { CardStyleInterpolators } from 'react-navigation-stack';

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: colors.darker,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lista: {
        flex: 1,
    },
    listaItem: {
        
    },
    titulo: {
        color: colors.darker,
        fontSize: 20,
        backgroundColor: colors.light,
        borderWidth: 2,
    },
    exercicioContainer:{
        flex:1,
        borderWidth: 2,
        flexDirection: 'row',
        
    },
    exercicioItemNome:{
        borderWidth: 1,
        padding: 2,
        width: '40%',
        fontSize: 16,    
        backgroundColor: colors.white,    
    },
    exercicioItemSerie:{
        borderWidth: 1,
        padding: 2,
        width: '20%',
        fontSize: 16,    
        backgroundColor: colors.white,    
    },
    exercicioItemCarga:{
        borderWidth: 1,
        padding: 2,
        width: '20%',
        fontSize: 16,    
        backgroundColor: colors.white,    
    },
    exercicioItemRepeticoes:{
        borderWidth: 1,
        padding: 2,
        width: '20%',  
        fontSize: 16, 
        backgroundColor: colors.white,     
    },
    exercicioTitle:{
        borderWidth: 1,
        padding: 2,
        fontSize: 16,
        width: '40%',
        backgroundColor: colors.white,
    },
    exercicioSerie:{
        borderWidth: 1,
        padding: 2,
        fontSize: 16,
        width: '20%',
        backgroundColor: colors.white,
    },
    exercicioCarga:{
        borderWidth: 1,
        padding: 2,
        fontSize: 16,
        width: '20%',
        backgroundColor: colors.white,
    },
    repeticoesTitle:{
        borderWidth: 1,
        padding: 2,
        fontSize: 16,
        width: "20%",
        backgroundColor: colors.white,
    },


})

export default styles;