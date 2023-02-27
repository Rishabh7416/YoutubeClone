import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import NewRouter from './src/router/newRoute';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ShimmerComponent from './src/components/customShimmer/shimmerComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {{backgroundColor: 'white'}}>
        <StatusBar/>
      </View>
      <Provider store={store}>
        <NewRouter />
        {/* <ShimmerComponent/> */}
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
