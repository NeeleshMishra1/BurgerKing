
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import RootNavigation from './src/navigator/rootNavigation';
import Home from './src/screens/homeScreen';
import Menu from './src/screens/menuScreen';

function App() {
  return (
    <RootNavigation />
    // <Menu/>
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