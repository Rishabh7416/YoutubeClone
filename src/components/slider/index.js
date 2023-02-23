import React from 'react';
import Slider from '@react-native-community/slider';

const SliderBar = ({...props}) => {
  return (
    <Slider
      tapToSeek={true}
      minimumValue={0}
      thumbTintColor="grey"
      value={props.progress}
      maximumValue={props.duration}
      // onSlidingComplete={time => console.log(time)}
      // onValueChange = {(value) => console.log(value)}
    />
  );
};

export default SliderBar;
