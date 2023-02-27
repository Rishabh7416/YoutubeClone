import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
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
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: normalize(10),
    borderBottomRightRadius: normalize(10),
  },

  channelName: {
    color: colors.darkerGrey,
    fontWeight: '600',
    marginLeft: normalize(10),
  },
  
  imageStyle: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(50),
  },
  
  lowerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  viewCountStyle: {
    fontWeight: '600',
    color: colors.darkerGrey,
    marginVertical: normalize(10),
  },

  childContainer: {
    alignItems: 'center',
    height: normalize(190),
    justifyContent: 'center',
    borderRadius: normalize(10),
  },
  titlestyle: {
    fontWeight: '500',
    color: colors.black,
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
    marginTop: normalize(10),
    justifyContent: 'center',
    marginLeft: normalize(12),
    borderRadius: normalize(10),
  },

  shimmerThirdContainer: {
    alignItems: 'center',
    width: normalize(32),
    height: normalize(32),
    justifyContent: 'center',
    marginTop: normalize(10),
    marginLeft: normalize(14),
    borderRadius: normalize(50),
  },

  shimmerFourthContainer: {
    alignItems: 'center',
    height: normalize(32),
    justifyContent: 'center',
    marginTop: normalize(10),
    marginLeft: normalize(10),
    borderRadius: normalize(10),
  },

  shimmerContainer: {
    position: 'absolute'
  }
});
