import {StyleSheet} from 'react-native';
import { normalize, vh, vw } from '../../utils/dimensions';

export const channelInfoStyles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderTopWidth: 0.4,
    alignItems: 'center',
    height: normalize(80),
    borderBottomWidth: 0.4,
    justifyContent: 'center',
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },

  containerStyle: {
    backgroundColor: '#50E2E1',
    width: '35%',
  },

  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
  },

  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '49%',
  },

  commentCountStyle: {color: 'darkgrey', fontSize: normalize(12)},

  commentStyle: {
    width: 290,
    marginLeft: normalize(12),
    fontSize: normalize(12),
    color: '#636363',
    fontWeight: '400',
    lineHeight: normalize(17),
    marginVertical: normalize(10),
  },

  commentTextStyle: {
    color: 'black',
    fontWeight: '600',
    fontSize: normalize(12),
  },

  commentUserStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: normalize(18),
    width: normalize(11),
    // backgroundColor: 'red',
  },

  commentContainer: {
    borderBottomWidth: 0.4,
    borderColor: 'grey',
    width: '100%',
    alignSelf: 'center',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(22),
    // backgroundColor: 'red'
  },

  lowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
