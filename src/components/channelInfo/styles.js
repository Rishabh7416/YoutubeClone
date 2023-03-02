import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimensions';

export const channelInfoStyles = StyleSheet.create({
  container: {
    lightMode: {
      borderTopWidth: 0.4,
      alignItems: 'center',
      height: normalize(80),
      borderBottomWidth: 0.4,
      borderColor: colors.grey,
      justifyContent: 'center',
    },
    darkMode: {
      borderTopWidth: 0.4,
      alignItems: 'center',
      height: normalize(80),
      borderBottomWidth: 0.4,
      borderColor: colors.grey,
      justifyContent: 'center',
    },
  },

  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageStyle: {
    width: normalize(43),
    height: normalize(43),
    borderRadius: normalize(50),
  },

  channelStyle: {
    height: normalize(35),
    justifyContent: 'space-between',
  },

  channelName: {
    lightMode: {
      fontWeight: 'bold',
      color: colors.black,
      fontSize: normalize(14),
    },
    darkMode: {
      fontWeight: 'bold',
      color: colors.white,
      fontSize: normalize(14),
    },
  },

  containerStyle: {
    width: '35%',
    backgroundColor: colors.uniqueBlue,
  },

  titleStyle: {
    fontWeight: 'bold',
    color: colors.white,
  },

  userInfo: {
    width: '49%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  commentCountStyle: {
    color: colors.darkerGrey,
    fontSize: normalize(12),
  },

  commentStyle: {
    lightMode: {
      width: '78%',
      fontWeight: '400',
      color: colors.dark,
      fontSize: normalize(12),
      marginLeft: normalize(12),
      lineHeight: normalize(17),
      marginVertical: normalize(10),
    },
    darkMode: {
      width: '78%',
      fontWeight: '400',
      color: colors.white,
      fontSize: normalize(12),
      marginLeft: normalize(12),
      lineHeight: normalize(17),
      marginVertical: normalize(10),
    },
  },

  commentTextStyle: {
    lightMode: {
      color: colors.black,
      fontWeight: '600',
      fontSize: normalize(12),
    },
    darkMode: {
      color: colors.white,
      fontWeight: '600',
      fontSize: normalize(12),
    },
  },

  commentUserStyle: {
    top: 0,
    right: 0,
    width: normalize(11),
    position: 'absolute',
    height: normalize(18),
  },

  commentContainer: {
    width: '100%',
    alignSelf: 'center',
    borderBottomWidth: 0.4,
    borderColor: colors.grey,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(22),
  },

  lowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subscribe: {
    fontSize: normalize(12),
    fontWeight: '600',
    color: colors.darker,
  },
});
