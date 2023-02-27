import React from 'react';
import {View} from 'react-native';
import {shimmerStyles} from './styles';
import {SCREEN_WIDTH} from '../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const Shimmer = createShimmerPlaceholder(LinearGradient);

/**
 * 
 * @param {*} param0 
 * @returns shimmerComponent
 */
export default function ShimmerComponent({...props}) {
  return (
    <View style={[shimmerStyles.container, props.shimmerContainer]}>
      <View style={shimmerStyles.shimmerInnerContainer}>
        <Shimmer style={props.firstContainer} width={SCREEN_WIDTH * 0.9} />
        <Shimmer style={props.secondContainer} width={SCREEN_WIDTH * 0.7} />
        <View style={shimmerStyles.childContainer}>
          <Shimmer style={props.thirdContainer} width={SCREEN_WIDTH * 0.1} />
          <Shimmer style={props.fourthContainer} width={SCREEN_WIDTH * 0.5} />
        </View>
      </View>
    </View>
  );
}
