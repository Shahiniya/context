import { Container,Add } from '../Table/style';
import React, {useState} from 'react';


export const Table = () => {
    
    const [data,setData] = useState([
        {id:1,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:2,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:3,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:4,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:5,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:6,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:7,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:8,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:9,name:'Shokhzoda',age:34,job:'front-end developer'},
        {id:10,name:'Shokhzoda',age:34,job:'front-end developer'},
    
    ])

    const [inputt,setInput] = useState();

    const onChange = (e) =>{
        const {name,value} = e.target.value;
        setInput({[name]:value})
        // console.log(inputt)
    }

    const onSave = (e) => {
        const newUser = {
            id: data.length+1,
            name:data.name,            
            job:data.job,
           
        }
        setData(
            [...data,newUser]
           )
    }


  return (
    <Container>
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Update</th>
        </tr>
    </thead>
   
            <tbody>
            {
                data.map(({id,name,age,job})=>(
                   
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{job}</td>
                    <td>
                    <button>save</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <Add>
            <input onChange={onChange}  name='name' type='text' placeholder='enter name'/>
            <input onChange={onChange}  name='job' type='text' placeholder='enter job'/>
            <button onClick={onSave} >add</button>
        </Add>
    
    </Container>
    )
                }
  