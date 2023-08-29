import React from 'react'
import { useState } from 'react'


const Result = (props) => {

    const [result, setresult] = useState(false);


    setInterval(()=>{
        setresult(true);
    },1000);
  return (
    <>
    {result==false?
    <div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>:<><div className='result'><div class="cauldron">
    <div class="cauldron-top"></div>
    <div class="fire">
      <div class="fire-red"></div>
      <div class="fire-orange"></div>
      <div class="fire-yellow"></div>
    </div>
    <div class="cauldron-bottom"></div>
  </div><h2>Your net word per minute is {props.nwpm} and gross word per minute is {props.gwpm}</h2>

<div class="cauldron">
    <div class="cauldron-top"></div>
    <div class="fire">
      <div class="fire-red"></div>
      <div class="fire-orange"></div>
      <div class="fire-yellow"></div>
    </div>
    <div class="cauldron-bottom"></div>
  </div>
  </div>
  </>}
</>
  )
}

export default Result