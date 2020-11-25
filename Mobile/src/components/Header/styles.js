import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.dark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.primary,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darker,
  },
});
export default styles;
