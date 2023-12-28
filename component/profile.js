import React from "react";
import { useState,useEffect } from "react";

const profile = (props) => {

    const[count,setCount] = useState(0);
    console.log("normal")

    useEffect(()=>{
        console.log("useEffect")        
    });

    counter = () => {
        // setCount=   (count)=>{
        //     count+1;
        // }        
        setCount((count) => 
        count = count +1,
        console.log(count,"loginClicked")
        )
    }
    return(
        <>
        {console.log("reder")}
        <h1>Profile outlet</h1>
        <p>{props.name}</p>
        <h4>Count : {count}</h4>
        <button onClick={counter}>setF</button>
        </>
    )
}

export default profile;