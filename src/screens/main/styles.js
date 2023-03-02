import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {normalize, vh} from '../../utils/dimensions';

export const mainScreenStyle = StyleSheet.create({
  mainContainer: {
    lightMode: {
      backgroundColor: colors.white,
    },
    darkMode: {
      backgroundColor: colors.black,
    },
  },

  buttonContainer: {
    width: vh(100),
    height: normalize(35),
    justifyContent: 'center',
    borderRadius: normalize(20),
    backgroundColor: colors.uniqueBlue,
  },

  buttonContainerChange: {
    width: vh(90),
    height: normalize(35),
    justifyContent: 'center',
  },

  titleStyle: {
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
    fontSize: normalize(14),
  },

  contentStyle: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(68),
    borderRadius: normalize(20),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },

  contentContainerStyle: {
    lightMode: {
      backgroundColor: colors.lightBlue,
    },
    darkMode: {
      backgroundColor: colors.black,
    },
  },

  container: {
    backgroundColor: colors.white,
  },
});
