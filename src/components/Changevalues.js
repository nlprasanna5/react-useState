import {useState} from 'react';

function Changenumber(){
    const [number,setNumber]=useState(0);

   function increment(){
       setNumber(number+1)
   }
   function decrement(){
    setNumber(number-1);
   }

   const buttonStyle={
    margin: "15px",
    padding: "10px 20px"
   }
    return(
        <>
        <h2 style={{color:"red"}}>{number}</h2>
        <div style={{marginBottom:"30px"}}>
        <button onClick={increment} style={buttonStyle}>Increment</button>
        <button onClick={decrement} style={buttonStyle}>Decrement</button>
        </div>
        
        </>
    )
}

export default Changenumber;