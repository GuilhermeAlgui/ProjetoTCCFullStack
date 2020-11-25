import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';


const styles = StyleSheet.create({
  lista: {
    flex: 1,
    padding: metrics.basePadding,
  },
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: colors.darker,
  },
  caixatext: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
  },

  optionText:{
    textAlign: 'center',
    color: colors.darker,
    fontSize: 24,
    fontWeight: 'bold'
  },

  optionContainer: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.darker,
    padding: metrics.basePadding * 1.5,
    marginBottom: 10,
    backgroundColor: colors.primary,
  },
  listContainer:{
    marginTop: metrics.baseMargin,
    flex: 1,
    justifyContent: 'space-evenly'
    
  }
});

export default styles;
