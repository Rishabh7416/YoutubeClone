import colors from '../utils/colors';
import {StyleSheet} from 'react-native';
import {normalize} from '../utils/dimensions';

export const screenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  contentContainerStyle: {
    paddingBottom: normalize(30),
  },

  eventPanelStyle: {
    marginVertical: normalize(25),
  },

  renderContainer: {
    marginTop: normalize(25),
  },

  similarVideoText: {
    fontWeight: 'bold',
    fontSize: normalize(20),
    marginTop: normalize(30),
    marginLeft: normalize(20),
  },
});
