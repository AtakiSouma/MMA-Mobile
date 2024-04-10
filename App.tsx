import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppRouter from './src/navigators/AppRouter';

const App = () => {
  return (
    <GestureHandlerRootView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Provider store={store}>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
