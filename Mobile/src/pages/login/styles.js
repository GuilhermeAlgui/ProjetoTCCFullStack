import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';
import { CardStyleInterpolators } from 'react-navigation-stack';

const styles = StyleSheet.create ({
    pagina: {
        flex: 1,
        backgroundColor: colors.darker,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    container: {
        borderRadius: 10,
        paddingVertical: metrics.basePadding*2,
        paddingHorizontal: metrics.basePadding,
        backgroundColor: colors.lighter,
        
        margin: metrics.baseMargin
    },
    containerTitulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: metrics.baseMargin*0.5,
        alignSelf: 'center'
    },
    containerUsuario:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: metrics.baseMargin,
        alignContent: 'center' ,
        

    },
    containerUsuarioLabel:{
        fontSize:14,
        fontWeight: 'bold',
    },
    containerUsuarioInput: {
        borderWidth: 1,
        fontSize: 16,
        color: colors.black,
        alignSelf: 'stretch',
        flexGrow: 1,
    },
    containerSenha:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: metrics.baseMargin,
        alignContent: 'center' ,
        

    },
    containerSenhaLabel:{
        fontSize:14,
        fontWeight: 'bold',
    },
    containerSenhaInput: {
        borderWidth: 1,
        fontSize: 16,
        color: colors.black,
        alignSelf: 'stretch',
        flexGrow: 1,
    },
    containerButtons:{
        flexDirection: 'row',
        marginVertical: metrics.baseMargin,
        justifyContent: 'space-between' ,
        

    },

    containerButtonsButtom:{
        borderRadius: 10,
        padding: metrics.basePadding* 0.5,
        backgroundColor:colors.secundary
    }

})

export default styles;