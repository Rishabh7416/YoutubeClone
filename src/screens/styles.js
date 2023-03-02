import colors from '../utils/colors';
import {StyleSheet} from 'react-native';
import {normalize} from '../utils/dimensions';

export const screenStyle = StyleSheet.create({
  container: {
    lightMode: {
      flex: 1,
      backgroundColor: colors.white,
    },
    darkMode: {
      flex: 1,
      backgroundColor: colors.black,
    },
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
    lightMode: {
      fontWeight: 'bold',
      color: colors.black,
      fontSize: normalize(20),
      marginTop: normalize(30),
      marginLeft: normalize(20),
    },
    darkMode: {
      fontWeight: 'bold',
      color: colors.white,
      fontSize: normalize(20),
      marginTop: normalize(30),
      marginLeft: normalize(20),
    },
  },
});
