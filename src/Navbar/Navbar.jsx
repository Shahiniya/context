import React from 'react';
import {Container} from './style';
import {FlowerContext} from '../context/index.jsx';
import {useContext} from 'react';

export const Navbar = ({count}) => {

    const [data,setData] = useContext(FlowerContext);
    console.log(FlowerContext)
  return (
   <Container>
    <h3>Home  Count: {data?.length}</h3>
    <h3>Home</h3>
    <h3>Home</h3>
    <h3>Home</h3>
    <h3>Home</h3>
    <h3>Home</h3>
    </Container>
  )
}
