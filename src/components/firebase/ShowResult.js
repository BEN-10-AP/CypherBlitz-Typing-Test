import React from 'react'
import { useEffect } from 'react'
import { getDoc, getDocs } from 'firebase/firestore'
import { leaderRef } from './firebase'


const ShowResult = () => {


    useEffect(() => {
        async function getData(){
            const _data = await getDocs(leaderRef);
            _data.forEach((doc)=>{
                console.log(doc[0].name);
            })
            
        }
    },[])
  return (
    <div>ShowResult</div>
  )
}

export default ShowResult