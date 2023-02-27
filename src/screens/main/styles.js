import {StyleSheet} from 'react-native';
import {normalize, vh} from '../../utils/dimensions';

export const mainScreenStyle = StyleSheet.create({
  buttonContainer: {
    width: vh(100),
    height: normalize(35),
    justifyContent: 'center',
    backgroundColor: '#50E2E1',
    borderRadius: normalize(20),
  },

  buttonContainerChange: {
    height: normalize(35),
    width: vh(90),
    justifyContent: 'center',
  },

  titleStyle: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: normalize(14),
  },

  contentStyle: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(68),
    backgroundColor: 'white',
    borderRadius: normalize(20),
    justifyContent: 'space-between',
  },

  contentContainerStyle: {
    backgroundColor: '#F2F8F8',
  },

  container: {backgroundColor: 'white'}
});
