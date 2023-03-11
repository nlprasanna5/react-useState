import {useState} from "react";

function Text(){
    const [text,setText]=useState("Amit");

    function handleClick(){
        setText(text==="Amit"?"Rajan":"Amit");
    }

    return(
        <>
        <h2>My name is {text}</h2>
        <button onClick={handleClick} style={{padding:"10px"}}>Change Name</button>
        </>
    )
}

export default Text;