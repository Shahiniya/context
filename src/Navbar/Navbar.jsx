import React from 'react';
import {Container} from './style';
import {FlowerContext} from '../context/index.jsx';
import {useContext} from 'react';

export const Navbar = ({count}) => {

    const [data] = useContext(FlowerContext);
    console.log(FlowerContext)
  return (
   <Container>
    <h3>Plant Count: {data?.length}</h3>
    <h3>Home</h3>
    <h3>About</h3>
    <h3>Contact</h3>
    <h3>Shop</h3>
    
    </Container>
  )
}
