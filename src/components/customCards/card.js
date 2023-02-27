import React from 'react';
import {customCardStyle} from './styles';
import {View, Text, Image} from 'react-native';
import ShimmerComponent from '../customShimmer/shimmerComponent';
import localImages from '../../utils/localImages';

export default React.memo(function Card({...props}) {
  const [loader, setLoader] = React.useState(false);

  const _onLoadEnd = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const onLoadLoader = () => {
    setLoader(true);
  };

  return (
    <View style={[customCardStyle.container, props.containerStyle]}>
      <View style={customCardStyle.childContainer}>
        {!loader && (
          <Image
            style={customCardStyle.playButtonstyle}
            source={localImages.playIcon}
          />
        )}
        <Image
          onLoad={onLoadLoader}
          onLoadEnd={_onLoadEnd}
          resizeMode="cover"
          style={customCardStyle.thumbnail}
          source={{uri: props.thumbnail}}
        />
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
          secondContainer={customCardStyle.shimmerSecondContainer}
          thirdContainer={customCardStyle.shimmerThirdContainer}
          fourthContainer={customCardStyle.shimmerFourthContainer}
        />
      )}
    </View>
  );
});
