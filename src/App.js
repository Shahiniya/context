import {Body} from './Body/body';
import {Navbar} from './Navbar/Navbar';
import {Reduc} from './reduc';
import React, {useReducer} from 'react';
import {Table} from './Table/Table'
import {Fetch} from './Table/Fetch'
// import {flowers} from './mock/mock';
// import React, {useState} from 'react'




export const Root = () => {

  // const  [data, setData] = useState(flowers);

  //
  const reducer = (state,action)=>{
    switch (action?.type){
      case 'plus' :{
        localStorage.setItem('counter',state)
      }
        return state+2;
      case 'minus':
        if (state>0) {
          localStorage.setItem('counter',state)
          return state-1
        }        
          else return state;
      default : 
        return state;
    }
       
  }
  const [st, dispatch] = useReducer(reducer,
    Number(localStorage.getItem('counter')) || 0);
  return (
    <div>
    <Navbar/>
    <Body/>
    <Reduc state={st} dispatch={dispatch} />
    <Table/>
    <Fetch/>
  
    </div>
  )
}
