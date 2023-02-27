import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {normalize, SCREEN_WIDTH} from '../../utils/dimensions';

export const shimmerStyles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: normalize(10),
    width: SCREEN_WIDTH - normalize(38),
  },

  shimmerInnerContainer: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8.3,
    shadowOpacity: 0.25,
    height: normalize(305),
    shadowColor: colors.black,
    borderRadius: normalize(10),
    backgroundColor: colors.white,
  },

  childContainer: {
    flexDirection: 'row',
  },
});
