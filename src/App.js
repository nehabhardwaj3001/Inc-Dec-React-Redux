import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux" 
import {incNumber, decNumber} from './actions/index';

function App() {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
 
  return (
    <div className="App">

      <h1>Welcome to REdux</h1>
      <h4>using React and Redux</h4>
       <div className='quantity'>
         <a className="quantity-minus" title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></a>
         <input name="quantity" type='text' className='quantity-input' value={myState} /> 
         <a className="quantity-plus" title='Increment' onClick={() => dispatch(incNumber())}><span>+</span></a>

          </div>

    </div>
  );
}

export default App;
