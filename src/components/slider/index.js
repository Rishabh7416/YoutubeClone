import React from 'react';
import Slider from '@react-native-community/slider';
import localImages from '../../utils/localImages';

const SliderBar = ({...props}) => {
  const propCallbackHandler = value => {
    props.onValuesChange(value);
  };

  return (
    <Slider
      step={1}
      minimumValue={0}
      tapToSeek={true}
      thumbTintColor="grey"
      value={props.progress}
      maximumValue={props.duration}
      style={props.sliderContainer}
      minimumTrackTintColor={'white'}
      maximumTrackTintColor={'darkgrey'}
      onValueChange={propCallbackHandler}
      thumbImage={localImages.thumbImage}
    />
  );
};

export default SliderBar;
