import React, { Component } from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './src/store';

import Loader from './src/sections/components/loader';
import AppLayout from './src/app';

type Props = {};
export default class App extends Component<Props>{
  render(){
    return(
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loader />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
