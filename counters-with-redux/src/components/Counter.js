import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';
import { Component } from 'react';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter);
  
//   const incrementHandler = () => {
//     dispatch({type: 'increment'});
//   };
//   const decrementHandler = () => {
//     dispatch({type: 'decrement'});
//   };
// };

class Counter extends Component{
  incrementHandler(){
    this.props.increment();
  }
  decrementHandler(){
    this.props.decrement();
  }
  toggleCounterHandler(){

  }
  render(){
    return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
    );

  };

}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment'}),
    decrement: () => dispatch({ type: 'decrement'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
