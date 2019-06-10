import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import sagaPlugin from 'kea-saga';
import { getStore, activatePlugin } from 'kea';

activatePlugin(sagaPlugin);

const startingState = {
  kea: {
    count: 0,
  },
};

const store = getStore({
  plugins: [sagaPlugin],
  // preloadedState: startingState,
});

export default ({ element }) => <Provider store={store}>{element}</Provider>;
