
import React from 'react';
import { LogBox, StyleSheet, Text, View, } from 'react-native';
import RootNavigation from './src/navigator/rootNavigation';
import Main from './main';
import HomeJson1 from './src/api/json';
import Menu from './src/screens/menuScreen';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {Store} from './src/redux/myStore';
// import CartSlice from './src/redux/myCartSlice'
// import ProductSlice from './src/redux/myProductSlice'

// const Store = configureStore({
//   reducer:{
//     cart:CartSlice,
//     product:ProductSlice
//   }
// })

function App() {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

export default App;

const style = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
})