import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
const [a,setA]= useState(false)
const audioRef = useRef(null)

  return (
    <div className="container">
      <audio onPause={()=>{
       setA(false)
      }} onPlay={()=>{
        setA(true)
      }}  ref={audioRef}  src='./a.mp3' controls/>
      {a&&<img style={{position:"absolute", width:"100%",top:"7%",left:"0"}} src={'https://scontent.xx.fbcdn.net/v/t1.15752-9/355537454_283798880690060_2013482567252979935_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=4de414&_nc_ohc=ER4xil6HZRQAX9db16h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSKUeIQSaLPfB-RLMTdAvfuNxJrc_79K1k7zPvZjt1SLQ&oe=64BF9D1A'} />}
    </div>
  );
}

export default App;