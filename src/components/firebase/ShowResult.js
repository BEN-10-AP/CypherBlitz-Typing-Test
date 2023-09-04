import React, { useState,useEffect } from 'react'
import { getDoc, getDocs } from 'firebase/firestore'
import { leaderRef } from './firebase'
import Display from './Display'


const ShowResult = () => {
const[data, setData] = useState([]);
const [one,setOne] = useState(true);
const [length, setLength] = useState(0);

    useEffect(()=> {
        
        async function getData(){
            const _data = await getDocs(leaderRef);
            _data.forEach((doc)=>{
                setData((prv)=> [...prv,doc.data()])
                
            })
            
        }
        getData();
        setLength(data.length)
       
        
        },[])
        function removeDuplicates(arr) {
            return arr.filter((item,
                index) => arr.indexOf(item) === index);
        }
  return (
    <div>
{one?<Display data={data.slice(0,4)} length={length}/>:null}

</div>
  )
    }
export default ShowResult