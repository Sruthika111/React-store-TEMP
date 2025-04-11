import React,{useRef,useState} from 'react'

export default function App11() {
    const [color,setColor]=useState()
    const msgRef=useRef()
    const handleSubmit=()=>{
        msgRef.current.style.color =color
    }
  return (
    <div >
        <input type="text" onChange={(e)=>setColor(e.target.value)}></input>
       <button onClick={handleSubmit}>Submit</button>
       <p><h2 ref={msgRef}>Hello World</h2></p>
    </div>
  )
}
