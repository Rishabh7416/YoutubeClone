import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {normalize, SCREEN_WIDTH, vh} from '../../utils/dimensions';

const Shimmer = createShimmerPlaceholder(LinearGradient);

export default function ShimmerComponent({...props}) {
  return (
    <View style={[styles.container, props.shimmerContainer]}>
      <View
        style={{
          height: normalize(305),
          backgroundColor: 'white',
          borderRadius: normalize(10),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 8.3,
        }}>
        <Shimmer style={props.firstContainer} width={SCREEN_WIDTH * 0.9} />
        <Shimmer style={props.secondContainer} width={SCREEN_WIDTH * 0.7} />
        <View style={{flexDirection: 'row'}}>
          <Shimmer style={props.thirdContainer} width={SCREEN_WIDTH * 0.1} />
          <Shimmer style={props.fourthContainer} width={SCREEN_WIDTH * 0.5} />
        </View>
      </View>
      {/* <Shimmer height={20} width={SCREEN_WIDTH/3} style={{borderWidth: 1,zIndex: 10,}} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH - normalize(38),
    // overflow: 'hidden',
    // borderRadius: normalize(10),
    justifyContent: 'center',
    alignSelf: 'center',
    // borderWidth: 1,
    zIndex: 10,
    borderRadius: normalize(10),
  },
});
