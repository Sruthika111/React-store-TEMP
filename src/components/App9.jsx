import React,{useState,useEffect} from 'react'

export default function App9() {
    const [num,setNum]=useState(0);
    const [value,setValue]=useState(0);
    const [total,setTotal]=useState(0)
   
    useEffect(()=>{
        setTotal(
            (Number(num)+Number(value))
    )
    },[num]);
    useEffect(()=>{
        setTotal(
            (Number(num)*Number(value))
    )
    },[value]);
  return (
    <div>
       <p> <input type="number" placeholder="Enter number" onChange={(e)=>setNum(e.target.value)}></input></p>
       <p><input type="number" placeholder="Enter number" onChange={(e)=>setValue(e.target.value)}></input></p> 
        <hr></hr>
       Total:{total}
    </div>
  )
}
