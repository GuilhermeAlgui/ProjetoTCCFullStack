import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  main: {
    
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.darker,
  },
  colunaPacote:{
    flex:1,
    flexDirection: 'column'

  }
  ,
  colunaDebito:{
    flex:1,
    flexDirection: 'column'
  }
  ,
  colunaCredito:{
    flex:1,
    flexDirection: 'column'
  },
  containerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.secundary,
  },
  containerMensal: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#f4ea00',
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    padding: metrics.basePadding,

  },
  
  containerTrimestral: {
    flex: 1,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#678fc9',
    
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    padding: metrics.basePadding,

  },
  containerSemestral:{
    flex: 1,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ec1f26',
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
  }
  ,

  mensalItem: {
    backgroundColor: '#f4ea00',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  mensalTitle:{
    backgroundColor: '#f4ea00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trimestralTitle:{
    backgroundColor: '#678fc9',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  trimestralItem: {
    backgroundColor: '#678fc9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  semestralTitleBox:{
    backgroundColor: '#ec1f26',
    justifyContent: 'center',
    alignItems: 'center',
  },
  semestralItem: {
    backgroundColor: '#ec1f26',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#363a3b',
    fontSize: 20,
  },
  semestralTitle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.white,
    fontSize: 20,
  },
  itemText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#363a3b',
    fontSize: 25,
  },
  semestralText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.white,
    fontSize: 25,
  },
creditBox:{
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}
  ,
  creditoMensal: {
    fontWeight: 'bold',
    color: colors.darker,
    fontSize: 12,
    alignSelf: 'center',
  
  },
  credito: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 12,
    alignSelf: 'center',
  },
  promoteTotal: {
    fontSize: 12,
    color: '#363a3b',
  },
  promoteSemestral:{
    
    fontSize: 12,
    color: colors.white,
  }
});

export default styles;
