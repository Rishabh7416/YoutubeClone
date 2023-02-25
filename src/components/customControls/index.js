import {View, Animated} from 'react-native';
import React from 'react';

export default function CustomControl() {
  return (
    <Animated.View
      style={[
        videoPlayerStyles.animatedView,
        {
          backgroundColor: playPause ? 'rgba(52, 52, 52, 0.5)' : 'transparent',
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
