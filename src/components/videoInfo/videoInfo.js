import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {normalize} from '../../utils/dimensions';

export default function VideoInfo({...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.viewersStyle}>{`94k views . 3 days ago`}</Text>
      <Text style={styles.desciptionStyle}>{props.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
  viewersStyle: {
    color: '#959494',
    marginVertical: normalize(12),
  },
  desciptionStyle: {
    color: '#959494',
    fontWeight: '400',
    fontSize: normalize(13),
  },
});
