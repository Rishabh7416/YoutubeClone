import {
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import SliderBar from '../slider';
import Video from 'react-native-video';
import colors from '../../utils/colors';
import {videoPlayerStyles} from './styles';
import localImages from '../../utils/localImages';
import Orientation from 'react-native-orientation-locker';
import {commonFunctions} from '../../utils/commonFunctions';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimensions';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const VideoPlayer = ({...props}) => {
  const rnVidRef = React.useRef(null);
  const [skip, setSkip] = React.useState(0);
  const currentFocusedScreen = useIsFocused();
  const [playPause, setPlayPause] = React.useState(false);
  const [videoDuration, setVideoDuration] = React.useState(0);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [orientationState, setOrientationState] = React.useState('PORTRAIT');
  const [orientationStyle, setOrientationStyle] = React.useState(
    videoPlayerStyles.videoContainer,
  );
  const navigation = useNavigation();
  const [buffer, setBuffer] = React.useState(false);
  const hitslop = {top: 10, right: 10, left: 10, bottom: 10};
  const animationRef = React.useRef(new Animated.Value(1)).current;

  /**
   * styling object to handle landscape and portrait at one place only
   */
  const changeStyle = {
    lanscape: {
      height: SCREEN_WIDTH,
      width: SCREEN_HEIGHT,
      backgroundColor: colors.black,
    },
    portrait: videoPlayerStyles.videoContainer,
  };

  React.useEffect(() => {
    setPlayPause(false);
  }, [props.videos]);

  React.useEffect(() => {
    Orientation.addDeviceOrientationListener(value => {
      const state = value === 'PORTRAIT';
      state
        ? setOrientationStyle(changeStyle.portrait)
        : setOrientationStyle(changeStyle.lanscape);
      Orientation.unlockAllOrientations();
    });
    return () => {
      Orientation.removeDeviceOrientationListener(value => {
        const state = value === 'PORTRAIT';
        state && setOrientationStyle(changeStyle.portrait);
      });
    };
  }, []);

  /**
   * true or false state for the play n pause
   */
  const playPauseStatus = playPause || !currentFocusedScreen;

  /**
   *
   * @param {*} action
   */
  const videoControls = action => {
    if (action === 'next') {
      rnVidRef?.current?.seek(currentProgress + 10);
      setSkip(currentProgress + 10);
    } else {
      rnVidRef?.current?.seek(currentProgress - 10);
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
    handlingControls(true);
    setVideoDuration(timing);
  };

  /**
   *
   * @param {*} param0
   */
  const currentTimeFunc = ({currentTime}) => {
    setCurrentProgress(currentTime);
    if (Math.round(videoDuration.duration) == Math.round(currentTime)) {
      setPlayPause(true);
    }
  };

  /**
   *
   * @param {*} value
   */
  const refUpdater = reference => {
    rnVidRef.current = reference;
  };

  /**
   *
   * @param {*} state on true to hide, false to show
   * @returns animation
   */
  const handlingControls = state =>
    state
      ? Animated.timing(animationRef, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }).start()
      : Animated.timing(animationRef, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }).start();

  const onAction = () => {
    handlingControls(false);
    const hide = setTimeout(handlingControls(), 2000);
    clearTimeout(hide);
  };

  /**
   *
   * @param {*} param0
   * buffering state handler
   */
  const buffering = ({isBuffering}) => {
    setBuffer(isBuffering);
  };

  const onVal = value => {
    rnVidRef?.current?.seek(value);
  };

  /**
   * handling the orientation of the video player
   */
  const orientationHandler = () => {
    const state = orientationState.includes('LANDSCAPE');
    if (state) {
      Orientation.lockToPortrait();
      setOrientationStyle(videoPlayerStyles.videoContainer);
    } else {
      Orientation.lockToLandscape();
      setOrientationStyle({
        height: SCREEN_WIDTH,
        width: SCREEN_HEIGHT,
        backgroundColor: colors.black,
      });
    }
  };

  const loadStart = () => setBuffer(true);

  const onBackPressEvent = () => {
    navigation.goBack();
    Orientation.lockToPortrait();
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={1}>
        <Video
          ref={refUpdater}
          onLoad={onLoading}
          resizeMode={'cover'}
          onBuffer={buffering}
          onLoadStart={loadStart}
          paused={playPauseStatus}
          style={orientationStyle}
          source={{uri: props?.videos}}
          onProgress={currentTimeFunc}
        />
        {buffer ? (
          <ActivityIndicator
            size={'large'}
            animating={true}
            style={videoPlayerStyles.loadingIndicator}
          />
        ) : (
          <Animated.View
            style={[
              videoPlayerStyles.animatedView,
              {
                backgroundColor: playPause
                  ? colors.lightDark
                  : colors.transparent,
                // opacity: animationRef,
              },
            ]}>
            <TouchableOpacity
              onPress={onBackPressEvent}
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
                  source={
                    playPause ? localImages.playIcon : localImages.pauseIcon
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
                  source={localImages.forwardIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={videoPlayerStyles.lowerControlStyle}>
              <View style={videoPlayerStyles.controlMainContainer}>
                <SliderBar
                  skipDuration={skip}
                  onValuesChange={onVal}
                  progress={currentProgress}
                  duration={videoDuration.duration}
                  sliderContainer={videoPlayerStyles.sliderContainer}
                />
                <Text
                  style={
                    videoPlayerStyles.timingStyle
                  }>{`${commonFunctions.formattingTime(
                  videoDuration.duration,
                )}/${commonFunctions.formattingTime(currentProgress)}`}</Text>
              </View>
              <TouchableOpacity
                style={videoPlayerStyles.icon}
                onPress={orientationHandler}>
                <Image source={localImages.fullScreenIcon} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(VideoPlayer);
