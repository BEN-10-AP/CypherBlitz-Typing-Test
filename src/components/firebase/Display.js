import React from 'react'
import { useState,useEffect } from 'react'




const Display = (props) => {
    const[half, setHalf] = useState(props.length)
    useEffect(()=>{
        
            console.log(half)
        
        
    },[])
    
  return (
    <>{props.data.map((e,i)=>{
        
        return <h1>{e['Name']}</h1>

    })}</>
    
  )
  
}

export default Display