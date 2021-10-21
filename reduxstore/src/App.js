import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from './reducer';

function App() {
  const count = useSelector((state) => state.myFirstReducer.count);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increaseCount())}>increaseCount</button>
    </div>
  );
}
//https://www.youtube.com/watch?v=Kr9G8o3WM0g

export default App;
