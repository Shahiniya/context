import React, {createContext,useState} from 'react';
import {flowers} from '../mock/mock'

export const FlowerContext = createContext()
 
 export const Flower = ({children }) => {
    const [data,setData] = useState(flowers)
    return(
    <FlowerContext.Provider value={[data,setData]}>
    {children}
    </FlowerContext.Provider>
    )
}