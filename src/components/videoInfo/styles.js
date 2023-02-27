import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { normalize } from '../../utils/dimensions';

export const videoInfoStyles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    // paddingVertical: 8
  },
  desciptionStyle: {
    color: colors.dark,
    fontWeight: '400',
    fontSize: normalize(13),
  },
  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
  viewersStyle: {
    color: colors.dark,
    marginVertical: normalize(12),
  },
  buttonText: {
    color: colors.dark,
    fontWeight: '700',
  },
});
