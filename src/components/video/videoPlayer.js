import React from 'react';
import SliderBar from '../slider';
import Video from 'react-native-video';
import {videoPlayerStyles} from './styles';
import {useIsFocused} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {
  View,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

const VideoPlayer = ({...props}) => {
  const rnVidRef = React.useRef(null);
  const [skip, setSkip] = React.useState(0);
  const currentFocusedScreen = useIsFocused();
  const [playPause, setPlayPause] = React.useState(false);
  const hitslop = {top: 10, right: 10, left: 10, bottom: 10};
  const [videoDuration, setVideoDuration] = React.useState(0);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const animationRef = React.useRef(new Animated.Value(1)).current;
  const [orientationView, setOrientationView] = React.useState('');

  React.useEffect(() => {}, []);

  /**
   *
   */
  React.useEffect(() => {
    setPlayPause(false);
  }, [props.vid]);

  /**
   *
   */
  const playPauseStatus = playPause || !currentFocusedScreen;

  /**
   *
   * @param {*} action
   */
  const videoControls = action => {
    if (action === 'next') {
      rnVidRef.current.seek(currentProgress + 10);
      setSkip(currentProgress + 10);
    } else {
      rnVidRef.current.seek(currentProgress - 10);
      setSkip(currentProgress - 10);
    }
  };

  /**
   *
   */
  const managePlayPause = () => {
    setPlayPause(!playPause);
  };

  /**
   *
   * @param {*} timing
   */
  const onLoading = timing => {
    handlingControls(true); //hide
    setVideoDuration(timing);
  };

  /**
   *
   * @param {*} param0
   */
  const currentTimeFunc = ({currentTime}) => {
    // onAction();
    setCurrentProgress(currentTime);
  };

  /**
   *
   * @param {*} value
   */
  const refUpdater = value => {
    rnVidRef.current = value;
  };

  const orientationHandler = () => {};

  /**
   *
   * @param {*} state on true to hide, false to show
   * @returns animation
   */
  const handlingControls = state =>
    state
      ? Animated.timing(animationRef, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start()
      : Animated.timing(animationRef, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();

  const onAction = () => {
    handlingControls(false);
    const hide = setTimeout(handlingControls(), 2000);
    clearTimeout(hide);
  };

  return (
    <View>
      <TouchableOpacity
        style={{height: 200}}
        activeOpacity={1}
        onPress={orientationHandler}>
        <Video
          ref={refUpdater}
          resizeMode={'cover'}
          onLoad={onLoading}
          paused={playPauseStatus}
          source={{uri: props.vid}}
          onProgress={currentTimeFunc}
          onBuffer={() => <ActivityIndicator animating={true} size="large" />}
          style={videoPlayerStyles.videoContainer}
        />
        <Animated.View
          style={[
            videoPlayerStyles.animatedView,
            {
              backgroundColor: playPause
                ? 'rgba(52, 52, 52, 0.5)'
                : 'transparent',
              opacity: animationRef,
            },
          ]}>
          <View style={[videoPlayerStyles.container]}>
            <TouchableOpacity
              hitSlop={hitslop}
              onPress={() => videoControls('previous')}>
              <Image
                style={videoPlayerStyles.controlIcon}
                source={require('../../utils/assets/images/backwards.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={managePlayPause}>
              <Image
                source={
                  playPause
                    ? require('../../utils/assets/images/playYoutube.png')
                    : require('../../utils/assets/images/paused.png')
                }
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
                source={require('../../utils/assets/images/forward.png')}
              />
            </TouchableOpacity>
          </View>
          <SliderBar
            skipDuration={skip}
            progress={currentProgress}
            duration={videoDuration.duration}
          />
        </Animated.View>
      </TouchableOpacity>
      {/* {buffer && <ActivityIndicator animating={buffer} size="large" />} */}
    </View>
  );
};

export default VideoPlayer;
