import React from 'react';
import colors from '../../utils/colors';
import {View, Animated} from 'react-native';

export default function CustomControl() {
  return (
    <Animated.View
      style={[
        videoPlayerStyles.animatedView,
        {
          backgroundColor: playPause ? colors.lightDark : colors.transparent,
          opacity: animationRef,
        },
      ]}>
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
      <SliderBar
        skipDuration={skip}
        progress={currentProgress}
        duration={videoDuration.duration}
      />
    </Animated.View>
  );
}
