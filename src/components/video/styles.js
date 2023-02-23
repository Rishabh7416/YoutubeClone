import {StyleSheet} from 'react-native';
import { normalize } from '../../utils/dimensions';

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

  videoContainer: {flex: 1},

  animatedView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
});
