
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import RootNavigation from './src/navigator/rootNavigation';
import Home from './src/screens/homeScreen';

function App() {
  return (
    <RootNavigation />
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