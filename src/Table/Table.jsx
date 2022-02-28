import { Container,Add } from '../Table/style';
import React, {useState} from 'react';
import { flow } from '../mock/mock';


export const Table = ({id}) => {
    
    const [name,setName] = useState('');
    const [age,setAge] = useState('')
    const [job,setJob] = useState('');
    const [list,setList] = useState(flow);

  // const [name,setName] = useState('');
// const [age,setAge] = useState('');

// const onChange = (e)=>{
//     e.preventDefault();
// const newData= {
//     name:name,
//     age:age
// };
// setData([...data,newData]);
// setName('');
// setAge('');
// }

const onChange =(e)=>{
    setName(e.target.value) ; ;
    // e.preventDefault();
}
const onAdd=()=>{
    const newData={
        id:list.length+1,
        name:name,
        age:age,
        job:job,
    }
    setList([...list,newData])
}

const onDelete= (id) =>{
     let res= list.filter((value)=>value.id !== id);
     setList(res);
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
                list.map(({id,name,age,job})=>(
                   
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{job}</td>
                    <td>
                    <button>save</button>
                    <button onClick={()=>onDelete(id)} >delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <Add key={id}>
             <input onChange={(e)=>onChange(e)} type='text' placeholder='enter name'/>
             <input onChange={(e)=>setAge(e.target.value)}  type='text' placeholder='enter name'/>
             <input onChange={(e)=>setJob(e.target.value)}  type='text' placeholder='enter name'/>
               
            <button onClick={onAdd} >add</button>
        </Add>
    
    </Container>
    )
                }
  