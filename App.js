import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import NewRouter from './src/router/newRoute';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NewRouter />
      </Provider>
    </SafeAreaView>
  );
}
