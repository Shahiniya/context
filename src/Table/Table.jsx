import { Container,Add } from '../Table/style';
import React, {useState} from 'react';


export const Table = ({id}) => {
    
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
    const [name,setName] = useState('');
    const [age,setAge] = useState('')
    const [job,setJob] = useState('');


    // const onChange = (e) =>{
    //     // const {name,value} = e.target;
    //     setName(e.target.value) && setAge(e.target.value)  ;
    //        }

    // const onAdd = () => {    
    //        const newUser= {
    //         id: data.length+1,
    //         name:name, 
    //          age:age,          
    //        } 
    //     setData(
    //         [...data,newUser]
    //           )
    // }

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
    e.preventDefault();
}
const onAdd=()=>{
    const newData={
        id:data.length+1,
        name:name,
        age:age,
        job:job,
    }
    setData([...data,newData])
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
        <Add key={id}>
             <input onChange={(e)=>setName(e.target.value)}  value={name} id='name' type='text' placeholder='enter name'/>
             <input onChange={(e)=>setAge(e.target.value)}  value={age} id='age' type='text' placeholder='enter name'/>
             <input onChange={(e)=>setJob(e.target.value)}  value={job} id='job' type='text' placeholder='enter name'/>
               
            <button onClick={onAdd} >add</button>
        </Add>
    
    </Container>
    )
                }
  