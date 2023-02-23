import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { normalize } from '../../utils/dimensions';

export default function CustomButton({...props}) {
  return (
    <TouchableOpacity style={[styles.container, props.containerStyle]}>
      <Text style={[styles.titleStyle, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    alignItems: 'center',
    height: normalize(32),
    justifyContent: 'center',
    borderRadius: normalize(40),
  },

  titleStyle: {
    fontSize: normalize(11),
  },
});
