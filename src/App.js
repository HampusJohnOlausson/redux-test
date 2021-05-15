import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from './Actions'

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(6))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      { isLogged? <h2>Logged in</h2> : '' }
    </div>
  );
}

export default App;
