import React from 'react';
import LocalImages from '../LocalImages';
import {Image, StyleSheet, View} from 'react-native';
import {normalize} from '../Dimensions';

const NetworkIssue = () => {
  return (
    <View style={styles.contentContainer}>
      <Image source={LocalImages.noInternet} style={styles.imageStyle} />
    </View>
  );
};

export default NetworkIssue;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: normalize(30),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
