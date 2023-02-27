import {StyleSheet} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';

export const customCardStyle = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: normalize(20),
    borderRadius: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.3,
    // elevation: 13,
  },

  innerContainer: {
    flex: 0.4,
    padding: normalize(15),
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: normalize(10),
    borderBottomRightRadius: normalize(10),
  },

  channelName: {
    color: 'darkgrey',
    fontWeight: '600',
    marginLeft: normalize(10),
  },

  imageStyle: {
    width: normalize(30),
    height: normalize(30),
    // backgroundColor: 'red',
    borderRadius: normalize(50),
  },

  lowerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  viewCountStyle: {
    color: 'darkgrey',
    fontWeight: '600',
    marginVertical: normalize(10),
  },

  childContainer: {
    alignItems: 'center',
    height: normalize(190),
    justifyContent: 'center',
    borderRadius: normalize(10),
  },
  titlestyle: {
    color: 'black',
    fontWeight: '500',
    fontSize: normalize(16),
  },

  thumbnail: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: normalize(10),
    borderTopLeftRadius: normalize(10),
  },

  playButtonstyle: {
    zIndex: 1,
    position: 'absolute',
    width: normalize(20),
    height: normalize(20),
  },

  shimmerFirstContainer: {
    alignItems: 'center',
    height: normalize(190),
    justifyContent: 'center',
    borderTopLeftRadius: normalize(10),
    borderTopRightRadius: normalize(10),
  },

  shimmerSecondContainer:{
    alignItems: 'center',
    height: normalize(50),
    justifyContent: 'center',
    borderRadius: normalize(10),
    marginLeft: normalize(12),
    marginTop: normalize(10),
  },

  shimmerThirdContainer: {
    alignItems: 'center',
    height: normalize(32),
    width: normalize(32),
    justifyContent: 'center',
    borderRadius: normalize(50),
    marginLeft: normalize(14),
    marginTop: normalize(10),
  },

  shimmerFourthContainer: {
    alignItems: 'center',
    height: normalize(32),
    justifyContent: 'center',
    borderRadius: normalize(10),
    marginLeft: normalize(10),
    marginTop: normalize(10),
  },

  shimmerContainer: {position: 'absolute'}
});
