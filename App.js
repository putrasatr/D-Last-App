/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import Router from './src/router/navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from "react-native-bootsplash";

import rootReducer from './src/redux/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas';
import ContextProvider from "./src/auth";

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const App = () => {
  React.useEffect(async () => {
    await RNBootSplash.hide({ fade: true })
  })
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </ContextProvider>

  )

}
export default App


