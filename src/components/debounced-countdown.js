import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { kea } from 'kea';

import { put, cancelled } from 'redux-saga/effects';

const delay = (ms, val = true) => new Promise(resolve => setTimeout(() => resolve(val), ms));

export default class Countdown extends Component {
  render() {
    const { counter, finished } = this.props;
    const { start } = this.actions;

    return (
      <div className='kea-counter'>
        Count: {counter}
        <br />
        <br />
        {finished
          ? 'We made it until the end! finish() action triggered'
          : 'Click start to trigger the finish() action in a few seconds'}
        <br />
        <br />
        <button onClick={() => start()}>Start</button>
      </div>
    );
  }
}

export default Countdown;
