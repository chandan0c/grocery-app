import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GroceryList = (props) => {
    let [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8085/data").then((res)=>setData(res.data))
    },[props.renderPage])
    const deleteFun=(e)=>{
        let id=e.target.id;
        axios.delete(`http://localhost:8085/data/${id}`)
    }
  
  return (
    <div>
      <h1>add item will shown  below</h1>
      {
        data.map((e)=>{
          return <div key={e.id}>
               <span style={{margin:"50px"}}>{e.Item}</span>
               <button onClick={(e)=>deleteFun(e)} id={e.id}>Delete</button>
            </div>
        })
      }
   </div>
  )
}

export default GroceryList
