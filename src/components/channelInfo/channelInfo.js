import React from 'react';
import {channelInfoStyles} from './styles';
import {View, Text, Image} from 'react-native';
import {normalize} from '../../utils/dimensions';
import CustomButton from '../customButton/customButton';
import localImages from '../../utils/localImages';
import {useSelector} from 'react-redux';

/**
 *
 * @returns channelInfo
 */
export default function ChannelInfo({...props}) {
  const {mode} = useSelector(state => state.themeReducer);

  const styles = channelInfoStyles;

  const modeState = mode == 'light';

  return (
    <React.Fragment>
      <View
        style={
          modeState ? styles.container.lightMode : styles.container.darkMode
        }>
        <View style={channelInfoStyles.innerContainer}>
          <View style={channelInfoStyles.userInfo}>
            <Image
              source={{uri: props.channelIcon}}
              style={channelInfoStyles.imageStyle}
            />
            <View style={channelInfoStyles.channelStyle}>
              <Text
                style={
                  modeState
                    ? styles.channelName.lightMode
                    : styles.channelName.darkMode
                }>
                {props.channelName}
              </Text>
              <Text style={channelInfoStyles.subscribe}>
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
            source={localImages.expandCommentIcon}
          />
          <Text
            style={
              modeState
                ? styles.commentTextStyle.lightMode
                : styles.commentTextStyle.darkMode
            }>
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
          <Text
            style={
              modeState
                ? styles.commentStyle.lightMode
                : styles.commentStyle.darkMode
            }
            numberOfLines={2}>
            RishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhRishabhsdkjnfkjebkjsbgkjsbkgjbsdkjbgkjsdbkk
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
}
