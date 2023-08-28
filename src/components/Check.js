import React from 'react'
import { useState } from 'react';


const Check = (props) => {
    const [Strindex, setStrIndex]=useState(0);
    props.input.trim();
    let str=0;
    let str1=0;
    console.log(props.text);
    for(let i=0;i<props.input.length();i++)
    {
        if(props.input[i]!=' ')
            {   str+=props.input[i];
                str1+=props.text[i];
            }
        else
        {
            if(str1===str)
                setStrIndex(Strindex+1);
        }
    }
  return (
    
    <div>Check</div>
  )
}

export default Check