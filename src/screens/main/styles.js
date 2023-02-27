import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {normalize, vh} from '../../utils/dimensions';

export const mainScreenStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
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
    backgroundColor: colors.lightBlue,
  },

  container: {
    backgroundColor: colors.white,
  },
});
