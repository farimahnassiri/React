import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';
import { Component } from 'react';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  
  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };
  const increasetHandler = () => {
    dispatch({type: 'increase', amount: 10});
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasetHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){

//   }
//   render(){
//     return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     );

//   };

// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment'}),
//     decrement: () => dispatch({ type: 'decrement'})
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
