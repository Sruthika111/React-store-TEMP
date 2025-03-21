import React,{useState,useEffect} from 'react'

export default function App8() {
    const [num,setNum]=useState([]);
    const [value,setValue]=useState();
    const [total,setTotal]=useState(0)
    const handleSubmit=()=>{
            setNum([...num,value]);
    }
    useEffect(()=>{
        setTotal(num.reduce((s,value)=>{
            return s+Number(value);
        },0)
    )
    },[num]);
  return (
    <div>
        <input type="number" placeholder="Enter number" onChange={(e)=>setValue(e.target.value)}></input>
        <button onClick={handleSubmit}>Add</button>
        <hr></hr>
        {num && num.map((value,index)=> <div key={index}>{value}</div> )}total:{total}
    </div>
  )
}
