import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, login } from './actions';
function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(10))}>ADD</button>
      <button onClick={() => dispatch(decrement())}>REDUCE</button>
      <button onClick={() => dispatch(login())}>LOGIN</button>

      {isLogged ? <h3>You are login</h3> : ''}
    </div>
  );
}

export default App;
