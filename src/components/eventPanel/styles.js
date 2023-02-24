import {StyleSheet} from 'react-native';
import { normalize } from '../../utils/dimensions';

export const eventPanelStyles = StyleSheet.create({
  contentContainerStyle: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  renderItemStyle: {
    alignItems: 'center',
    width: normalize(50),
    height: normalize(48),
    justifyContent: 'space-between',
  },

  desc: {
    textAlign: 'center',
    fontSize: 12,
    color: 'grey',
    fontWeight: '600',
  },

  container: {alignItems: 'center'}, 
});
