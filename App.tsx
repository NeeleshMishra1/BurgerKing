
import React from 'react';
import { LogBox, StyleSheet, Text, View, } from 'react-native';
import Main from './main';
import { Provider } from 'react-redux';
import { Store } from './src/redux/myStore';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

let persistor = persistStore(Store);

function App() {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Main />
        </SafeAreaProvider>
      </PersistGate>
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