import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {normalize, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimensions';

export const videoPlayerStyles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    width: '52%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  controlIcon: {
    width: normalize(28),
    height: normalize(28),
    pause: {
      width: normalize(42),
      height: normalize(42),
    },
  },

  videoContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.black,
    height: SCREEN_HEIGHT / 3.4,
  },

  animatedView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },

  sliderContainer: {
    width: '100%',
    position: 'absolute',
    bottom: normalize(15),
  },

  timingStyle: {
    fontWeight: '600',
    letterSpacing: 0.1,
    color: colors.white,
    fontSize: normalize(11),
  },

  icon: {
    right: 0,
    position: 'absolute',
    bottom: normalize(2),
  },

  lowerControlStyle: {
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: normalize(10),
  },

  loadingIndicator: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },

  controlMainContainer: {
    width: '100%',
  },

  backIconContainerStyle: {
    top: '16%',
    left: '6%',
    position: 'absolute',
  },

  backIcon: {
    width: normalize(25),
    height: normalize(25),
  },
});
