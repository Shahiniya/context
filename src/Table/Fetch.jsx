import React,{useState,useEffect} from 'react'
import { Container3 } from './style';



export const Fetch = () => {
    const [data,setData] = useState([
        {id:1,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:2,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:3,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:4,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:5,name:'Shokhzoda',age:34,job:'front-end developer'},
       ]);

    const [count,setCount] = useState(1);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1',{
            method:'get',
            // headers:{
            //     Accept:'image/jpeg',
            //    'Content-Type':'application.json'
            // },
            // body: JSON.stringfy({name:'Webbbrain'})
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
    },[]);
    



  return (
    <Container3>
   <h1>Fetch</h1>
   <div>
   <button onClick = {()=>setCount(count+1)} >+</button>
   {
       data.map((value)=>(
         <h1 key={value.id}>
           {value.id} - {value.name}
        </h1>
       ))
   }
   </div>
      </Container3>
  )
}
