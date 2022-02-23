
import React from 'react';
import {Container1} from './style';
import  {useContext} from 'react';
import { FlowerContext } from '../context';


export const Body = (props) => {

    const [data,setData] = useContext(FlowerContext);

    const onDelete = (id) => {
    let res= data.filter((value)=> value.id !== id);
    setData(res);
        }
  return (
    <Container1>
    {
        data?.map((value)=>(
            <h1 key={value.id}>
            {value.id} - {value.title} 
            <button onClick={()=>onDelete(value.id)} > delete </button>
            </h1>

        ))
    }
    </Container1>
  )
}
