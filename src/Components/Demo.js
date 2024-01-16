import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Demo() {
    const[res,setres]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            setres(response.data)
            console.log(res);

         })
    },[])
     
  return (
    <div>
    {res.map((re)=><div>{re.name}</div>)}
    </div>
  )
}

export default Demo
