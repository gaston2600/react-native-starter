/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import WebSocketProvider, { WebSocketContext } from './src/Context/WebSocket';
import GeoLocationtProvider, { GeoLocationtContext } from './src/Context/GeoLocation';




import AppNavigation from './src/navigation/AppNavigation';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import configAxios from './src/services';
import { persistor, store } from './src/redux/reducers/store';
import { LoadingIndicator } from './src/components/common';





let scheme = "light";

export default function App() {
  configAxios();
  const defaultTheme = (scheme === 'dark') ? DarkTheme : DefaultTheme;

  const MyTheme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
    },
  };
  return (
    <>
      <StatusBar translucent barStyle={(scheme === 'dark') ? "light-content" : "dark-content"} backgroundColor="transparent" />
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <PersistGate
            loading={<LoadingIndicator />}
            persistor={persistor}
          >
            {/* <WebSocketProvider>
              <GeoLocationtProvider> */}
            <AppNavigation />
            {/* </GeoLocationtProvider>
            </WebSocketProvider> */}
          </PersistGate>

        </NavigationContainer>


      </Provider>

    </>
  );
};

