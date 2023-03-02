import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {normalize} from '../../utils/dimensions';

export const videoInfoStyles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  desciptionStyle: {
    lightMode: {
      fontWeight: '400',
      color: colors.dark,
      fontSize: normalize(13),
    },
    darkMode: {
      fontWeight: '400',
      color: colors.white,
      fontSize: normalize(13),
    },
  },
  titleStyle: {
    lightMode: {
      fontWeight: 'bold',
      color: colors.black,
      fontSize: normalize(16),
    },
    darkMode: {
      fontWeight: 'bold',
      color: colors.white,
      fontSize: normalize(16),
    },
  },
  viewersStyle: {
    color: colors.dark,
    marginVertical: normalize(12),
  },
  buttonText: {
    fontWeight: '700',
    color: colors.dark,
  },
});
