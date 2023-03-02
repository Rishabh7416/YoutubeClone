import React from 'react';
import {customCardStyle} from './styles';
import {View, Text, Image} from 'react-native';
import localImages from '../../utils/localImages';
import ShimmerComponent from '../customShimmer/shimmerComponent';
import {normalize} from '../../utils/dimensions';
import colors from '../../utils/colors';
import {useSelector} from 'react-redux';

export default React.memo(function Card({...props}) {
  const [loader, setLoader] = React.useState(false);

  const {mode} = useSelector(state => state.themeReducer);

  const styles = customCardStyle;

  const modeState = mode == 'light';

  const _onLoadEnd = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const onLoadLoader = () => {
    setLoader(true);
  };

  return (
    <View
      style={[
        modeState ? styles.container.lightMode : styles.container.darkMode,
        props.containerStyle,
      ]}>
      <View style={customCardStyle.childContainer}>
        {!loader && (
          <Image
            source={localImages.playIcon}
            style={customCardStyle.playButtonstyle}
          />
        )}
        <Image
          resizeMode="cover"
          onLoad={onLoadLoader}
          onLoadEnd={_onLoadEnd}
          source={{uri: props.thumbnail}}
          style={customCardStyle.thumbnail}
        />
        <View
          style={{
            width: normalize(60),
            position: 'absolute',
            right: normalize(15),
            bottom: normalize(12),
            height: normalize(31),
            borderRadius: normalize(7),
            backgroundColor: colors.lightDark,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: normalize(17),
            }}>
            {'5:30'}
          </Text>
        </View>
      </View>
      <View style={customCardStyle.innerContainer}>
        <Text style={customCardStyle.titlestyle}>{props.title}</Text>
        <Text style={customCardStyle.viewCountStyle}>
          {'94k views . 3 days ago'}
        </Text>
        <View style={customCardStyle.lowerContainer}>
          <Image
            source={{uri: props.thumbnail}}
            style={customCardStyle.imageStyle}
          />
          <Text style={customCardStyle.channelName}>{props.title}</Text>
        </View>
      </View>
      {loader && (
        <ShimmerComponent
          shimmerContainer={customCardStyle.shimmerContainer}
          firstContainer={customCardStyle.shimmerFirstContainer}
          thirdContainer={customCardStyle.shimmerThirdContainer}
          fourthContainer={customCardStyle.shimmerFourthContainer}
          secondContainer={customCardStyle.shimmerSecondContainer}
        />
      )}
    </View>
  );
});
