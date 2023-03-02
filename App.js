import React from 'react';
import {store} from './src/redux/store';
import NewRouter from './src/router/newRoute';
import {Provider, useSelector} from 'react-redux';
import {View, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {{backgroundColor: 'white'}}>
        <StatusBar/>
      </View>
      <Provider store={store}>
        <NewRouter />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
