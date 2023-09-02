import React, { useState,useEffect } from 'react'
import { getDoc, getDocs } from 'firebase/firestore'
import { leaderRef } from './firebase'


const ShowResult = () => {
const[data, setData] = useState([]);
const [one,setOne] = useState(true);
useEffect(()=>{

},[])
    useEffect(() => {
        async function getData(){
            const _data = await getDocs(leaderRef);
            _data.forEach((doc)=>{
                setData((prv)=> [...prv,doc.data()])
            })
            
        }
        getData();
        
    },[])
    
  return (
  
   data.map((e,i)=>{
      return(
      <div>
      <h2>{e.Name}</h2>
      <h2>{e["Net WPM"]}</h2>
      <h2>{e["Gross WPM"]}</h2>
      </div>
      )
    })
    
    )
}

export default ShowResult