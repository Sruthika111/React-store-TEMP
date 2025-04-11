import React from "react";
import { useState, useRef } from "react";
import "./App10.css";
export default function App10() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");
  const nb='no-ball'
  const wd='wide-ball'
  const runRef = useRef();
  const wicketRef = useRef();
  const msgRef = useRef()
  const handleRun = (v) => {
    if (wicket < 10) {
      setRun(run + v);
      setMsg("Well Done!");
       if(v===4) runRef.current.style.backgroundColor = "pink";
       if(v===1) runRef.current.style.backgroundColor = "aqua";
       if(v===6) runRef.current.style.backgroundColor = "silver";
       if(v===wd) {setRun(run+1); runRef.current.style.backgroundColor = "yellow";}
       if(v===nb) {setRun(run+1);runRef.current.style.backgroundColor = "gold";}
      wicketRef.current.style.transform = "scale(1)";
      runRef.current.style.transform = "scale(1.1)";
      wicketRef.current.style.backgroundColor = "white";
    }
  };

  const handleWicket = () => {
    wicket < 10 && setWicket(wicket + 1);
    if (wicket < 9) {
      setMsg("Better luck next time!");
      runRef.current.style.backgroundColor = "white";
      runRef.current.style.transform = "scale(1)";
      wicketRef.current.style.transform = "scale(1.1)";
      wicketRef.current.style.backgroundColor = "orange";
    } else {
      setMsg("Game Over");
      msgRef.current.style.backgroundColor = "yellow"
      runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App10-container">
      <h3>This is App10</h3>
      <div className="App10-row">
        <div className="App10-box" ref={runRef}>
          <button onClick={()=>handleRun(1)}>1</button>
          <button onClick={()=>handleRun(4)}>4</button>
          <button onClick={()=>handleRun(6)}>6</button>
          <button onClick={()=>handleRun(wd)}>wd</button>
          <button onClick={()=>handleRun(nb)}>nb</button>
          <p>{run}</p>
        </div>
        <div className="App10-box" ref={wicketRef}>
          <button onClick={handleWicket}>Wicket</button>
          <p>{wicket}</p>
        </div>
      </div>
      <hr></hr>
      <div className="App10-row">
        <div className="App10-box" ref={msgRef}> {msg}</div>
      </div>
    </div>
  );
}