import {StyleSheet} from 'react-native';
import {normalize} from '../utils/dimensions';

export const screenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  contentContainerStyle: {
    paddingBottom: normalize(30)
  },

  eventPanelStyle: {
    marginVertical: normalize(25)
  },

  renderContainer: {
    marginTop: normalize(25)
  },
});
