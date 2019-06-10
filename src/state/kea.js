import { kea } from 'kea';
import PropTypes from 'prop-types';
import { select } from 'redux-saga/effects';

export default kea({
  path: () => ['kea'],

  actions: () => ({
    increment: amount => ({ amount }),
    decrement: amount => ({ amount }),
  }),

  reducers: ({ actions }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) => state + payload.amount,
        [actions.decrement]: (state, payload) => state - payload.amount,
      },
    ],
  }),

  selectors: ({ selectors }) => ({
    doubleCounter: [() => [selectors.counter], counter => counter * 2, PropTypes.number],
  }),

  takeEvery: ({ actions, workers }) => ({
    [actions.increment]: function*() {
      const counter = yield select(state => state.kea.counter);
      console.log(`Incremented counter to ${counter}`);
    },
    [actions.decrement]: function*() {
      const counter = yield select(state => state.kea.counter);
      console.log(`Decremented counter to ${counter}`);
    },
  }),
});
