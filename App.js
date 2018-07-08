import React, { Component } from 'react';

import { composeWithDevTools } from 'redux-devtools-extension';

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './src/redux';
import { watcherSaga } from './src/sagas';

import PokemonLoader from './src/components/PokemonLoader';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = Reactotron.createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PokemonLoader />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
};
