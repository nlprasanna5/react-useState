import { useState } from "react";

function Input(){
    const [value,setValue]=useState("");
    const [text,setText]=useState([]);

   function handleChange(e){
           setValue(e.target.value);
   }
   function handleClick(){
       if(value.trim()){
        setText([...text,value.trim()]);
        setValue("");
       }
   }
   const componentStyle={
    marginLeft:"10px",
    padding:"10px",
   }
    return (
        <>
        <div style={{marginTop:"30px"}}>
               <input type="text" value={value} onChange={handleChange} style={{padding:"10px"}}/>
        <button onClick={handleClick} style={componentStyle}>Add</button>
        </div>
       
        <ul>
            {
                text.map((texts,index)=> {
                    return <li key={index} style={{listStyle:"none", margin:"5px"}}>{texts} !!</li>
                })
            }
        </ul>
        </>
    )
}

export default Input;