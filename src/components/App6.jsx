import React, { useState } from 'react'

export default function App6() {
    const [hobby,setHobby]=useState([])
    const [text,setText]=useState()
    const handleSubmit=()=>{
        if(hobby.includes(text)){
            alert("It already existed");
        }
        else{
        setHobby([...hobby,text]);
        }
    } 
    const handleDelete=(value)=>{
        setHobby(hobby.filter((element) => element!=value));
    } 
    return (
    <div>
        <input type="text" placeholder="Enter your Hobby" onChange={(event)=>setText(event.target.value)}></input>
        <button onClick={handleSubmit}>Add</button>
        <hr></hr>
        {hobby && hobby.map((value,index)=> <li key={index}>{value}<button onClick={()=> handleDelete(value)}>Delete</button></li>)}
    </div>
  )
}
