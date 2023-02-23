import React from 'react';
import {normalize} from '../../utils/dimensions';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import { customCardStyle } from './styles';

export default React.memo(function Card({...props}) {
  return (
    <View style={[customCardStyle.container, props.containerStyle]}>
      <View style={customCardStyle.childContainer}>
        <Image
          style={customCardStyle.playButtonstyle}
          source={require('../../utils/assets/images/playYoutube.png')}
        />
        <Image
          resizeMode="cover"
          style={customCardStyle.thumbnail}
          source={{uri: props.thumbnail}}
        />
      </View>
      <View style={customCardStyle.innerContainer}>
        <Text style={customCardStyle.titlestyle}>{props.title}</Text>
        <Text style={customCardStyle.viewCountStyle}>{'94k views . 3 days ago'}</Text>
        <View style={customCardStyle.lowerContainer}>
          <Image source={{uri: props.channelIcon}} style={customCardStyle.imageStyle} />
          <Text style={customCardStyle.channelName}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
});