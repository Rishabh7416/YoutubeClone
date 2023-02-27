import React from 'react';
import {channelInfoStyles} from './styles';
import {View, Text, Image} from 'react-native';
import {normalize} from '../../utils/dimensions';
import CustomButton from '../customButton/customButton';

/**
 *
 * @returns channelInfo
 */
export default function ChannelInfo({...props}) {
  return (
    <React.Fragment>
      <View style={channelInfoStyles.container}>
        <View style={channelInfoStyles.innerContainer}>
          <View style={channelInfoStyles.userInfo}>
            <Image
              source={{uri: props.channelIcon}}
              style={channelInfoStyles.imageStyle}
            />
            <View style={channelInfoStyles.channelStyle}>
              <Text style={channelInfoStyles.channelName}>
                {props.channelName}
              </Text>
              <Text
                style={[
                  channelInfoStyles.channelName,
                  {
                    fontSize: normalize(12),
                    fontWeight: '600',
                    color: '#rgb(103,103,104)',
                  },
                ]}>
                {props.subscribers}
              </Text>
            </View>
          </View>
          <CustomButton
            title={'Subscribe'}
            titleStyle={channelInfoStyles.titleStyle}
            containerStyle={channelInfoStyles.containerStyle}
          />
        </View>
      </View>
      <View style={channelInfoStyles.commentContainer}>
        <View>
          <Image
            style={channelInfoStyles.commentUserStyle}
            source={require('../../utils/assets/images/ic_expand.png')}
          />
          <Text style={channelInfoStyles.commentTextStyle}>
            {'Comments'}
            <Text style={channelInfoStyles.commentCountStyle}>{'  32'}</Text>
          </Text>
        </View>
        <View style={channelInfoStyles.lowerContainer}>
          <Image
            source={{uri: props.channelIcon}}
            style={[
              channelInfoStyles.imageStyle,
              {height: normalize(25), width: normalize(25)},
            ]}
          />
          <Text style={channelInfoStyles.commentStyle} numberOfLines={2}>
            RishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhsdkjnfkjebkjsbgkjsbkgjbsdkjbgkjsdbkk
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
}
