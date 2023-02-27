import React from 'react';
import colors from '../../utils/colors';
import {View, Animated, TouchableOpacity, Image, Text} from 'react-native';
import {commonFunctions} from '../../utils/commonFunctions';
import {videoPlayerStyles} from '../video/styles';
import localImages from '../../utils/localImages';
import SliderBar from '../slider';

export default function CustomControl({...props}) {
  const [playPause, setPlayPause] = React.useState(false);
  const hitslop = {top: 10, right: 10, left: 10, bottom: 10};
  const [skip, setSkip] = React.useState(0);

  const onBackPressEvent = () => {
    navigation.goBack();
    Orientation.lockToPortrait();
  };

  const managePlayPause = () => {
    setPlayPause(!playPause);
  };

  const onVal = value => {
    props.onValues(value);
  };

  return (
    <Animated.View
      style={[
        props.container,
        {
          backgroundColor: playPause ? colors.lightDark : colors.transparent,
          // opacity: animationRef,
        },
      ]}>
      <TouchableOpacity
        onPress={props.onBackPress}
        style={videoPlayerStyles.backIconContainerStyle}>
        <Image
          style={videoPlayerStyles.backIcon}
          source={localImages.backIcon}
        />
      </TouchableOpacity>
      <View style={[videoPlayerStyles.container]}>
        <TouchableOpacity
          hitSlop={hitslop}
          onPress={() => videoControls('previous')}>
          <Image
            style={videoPlayerStyles.controlIcon}
            source={localImages.backwardIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={managePlayPause}>
          <Image
            source={playPause ? localImages.playIcon : localImages.pauseIcon}
            style={
              playPause
                ? videoPlayerStyles.controlIcon
                : videoPlayerStyles.controlIcon.pause
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={hitslop}
          onPress={() => videoControls('next')}>
          <Image
            style={videoPlayerStyles.controlIcon}
            source={localImages.forwardIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={videoPlayerStyles.lowerControlStyle}>
        <View style={videoPlayerStyles.controlMainContainer}>
          <SliderBar
            skipDuration={skip}
            onValuesChange={onVal}
            progress={props.currentProgress}
            duration={props.videoDuration}
            sliderContainer={videoPlayerStyles.sliderContainer}
          />
          <Text
            style={
              videoPlayerStyles.timingStyle
            }>{`${commonFunctions.formattingTime(
            props.videoDuration,
          )}/${commonFunctions.formattingTime(props.currentProgress)}`}</Text>
        </View>
        <TouchableOpacity
          style={videoPlayerStyles.icon}
          onPress={props.onExpandPress}>
          <Image source={localImages.fullScreenIcon} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
