import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import { normalize, SCREEN_WIDTH, vh } from '../../utils/dimensions';

const Shimmer = createShimmerPlaceholder(LinearGradient);

export default function ShimmerComponent() {
  return (
    <View style={styles.container}>
      <Shimmer
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH / 1.2}
        shimmerColors={['darkgrey', 'lightgrey', 'lightgrey', 'lightgrey']}
        location={[0.3, 0.5, 0.7]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'red',
    width: '90%',
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
});
