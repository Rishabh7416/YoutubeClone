import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
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
    fontWeight: '600',
    color: colors.grey,
    textAlign: 'center',
    fontSize: normalize(12),
  },

  container: {alignItems: 'center'}, 
});
