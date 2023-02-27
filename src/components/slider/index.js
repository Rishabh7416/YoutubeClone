import React from 'react';
import colors from '../../utils/colors';
import localImages from '../../utils/localImages';
import Slider from '@react-native-community/slider';

const SliderBar = ({...props}) => {

  /**
   * 
   * @param {*} value 
   * @return the callback with time value
   */
  const propCallbackHandler = value => {
    props.onValuesChange(value);
  };

  return (
    <Slider
      step={1}
      tapToSeek={true}
      minimumValue={0}
      value={props.progress}
      thumbTintColor={colors.grey}
      maximumValue={props.duration}
      style={props.sliderContainer}
      onValueChange={propCallbackHandler}
      thumbImage={localImages.thumbImage}
      minimumTrackTintColor={colors.white}
      maximumTrackTintColor={colors.darkerGrey}
    />
  );
};

export default SliderBar;
