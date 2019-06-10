import React, { Component } from 'react';
import keaLogic from '../state/kea.js';
import { connect } from 'kea';

@connect({
  props: [keaLogic, ['counter', 'doubleCounter']],
  actions: [keaLogic, ['increment', 'decrement']],
})
class Counter extends Component {
  render() {
    const { counter, doubleCounter } = this.props;
    const { increment, decrement } = this.actions;

    return (
      <div className='kea-counter'>
        Count: {counter}
        <br />
        Doublecount: {doubleCounter}
        <br />
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
