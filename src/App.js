
import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions'; 
function App() {
  const dispatch = useDispatch();
  const myState  = useSelector((state)=>state.changeNumber);
  return (
    <div className="container">
      <h1>Increment and Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div className='quantity'>
        <a className='quantity_minus' title='Decrement'><span onClick={()=>{dispatch(decNumber)}}>-</span></a>
        <input name='quantity' type='text' className='quantity_input' value={myState}/>
        <a className='quantity_plus' title='Increment'><span onClick={()=>{dispatch(incNumber)}}>+</span></a>
      </div>
    </div>
  );
}

export default App;
