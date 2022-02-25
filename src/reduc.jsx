import React, {useState} from 'react'
// import {FlowerContext} from './context';
import { Container2 } from './Body/style';


export const Reduc = ({state,dispatch}) => {
    
    const [count,setCount] = useState(0);

      return (
    <Container2>
      <h1>useReducer</h1>
      <h1>Count: {count}</h1>

      <div>
      <button onClick={()=>setCount(count-1)} >-</button>
      <button onClick={()=>setCount(count+1)} >+</button>
      </div>

      <h1>Count REducer: {localStorage.getItem('counter') || 0}</h1>
      <div>
      <button onClick={()=>dispatch({type:'minus'})} >-</button>
      <button onClick={()=>dispatch({type: 'plus'})} >+</button>
      <button onClick={()=>localStorage.removeItem('counter')} >clear</button>
      <button onClick={()=>localStorage.clear()} >reset</button>

      </div>
    </Container2>
  )
}
