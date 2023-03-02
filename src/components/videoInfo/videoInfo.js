import React from 'react';
import {videoInfoStyles} from './styles';
import {normalize} from '../../utils/dimensions';
import {View, Text, Animated, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

export default function VideoInfo({...props}) {
  const scrollingToTop = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [textLines, setTextLines] = React.useState(1);
  const animatingRef = React.useRef(new Animated.Value(0)).current;

  const {mode} = useSelector(state => state.themeReducer);

  const modeState = mode == 'light';

  const startingValue = () => (textLines === 1 ? normalize(30) : normalize(34));

  /**
   *
   */
  const interpolating = animatingRef.interpolate({
    inputRange: [0, 1],
    outputRange: [startingValue(), normalize(20) * textLines],
  });

  /**
   *
   */
  const animatedHeight = {
    height: interpolating,
  };

  /**
   *
   */
  const shoeMoreLessEvent = () => {
    setShow(!show);
    show && scrollingToTop.current.scrollTo({y: 0, animated: true});
    Animated.timing(animatingRef, {
      toValue: show ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const showing = () =>
    textLines < 3 ? null : show ? 'show less' : 'show more...';

  const moreLess = showing();

  /**
   *
   * @param {*} e
   */
  const findTextLines = e => {
    setTextLines(e.nativeEvent.lines.length);
  };

  const styles = videoInfoStyles;

  return (
    <View style={videoInfoStyles.container}>
      <Text
        style={
          modeState ? styles.titleStyle.lightMode : styles.titleStyle.darkMode
        }>
        {props.title}
      </Text>
      <Text
        style={videoInfoStyles.viewersStyle}>{`94k views . 3 days ago`}</Text>
      <Animated.View style={[videoInfoStyles.box, animatedHeight]}>
        <ScrollView
          bounces={false}
          ref={scrollingToTop}
          scrollEnabled={show}
          showsVerticalScrollIndicator={false}>
          <Text
            onTextLayout={findTextLines}
            style={
              modeState
                ? styles.desciptionStyle.lightMode
                : styles.desciptionStyle.darkMode
            }>
            {props.desc}
          </Text>
        </ScrollView>
        <Text style={videoInfoStyles.buttonText} onPress={shoeMoreLessEvent}>
          {moreLess}
        </Text>
      </Animated.View>
    </View>
  );
}
