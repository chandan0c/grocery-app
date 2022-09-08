import React, { useState } from 'react'
import axios from 'axios';
import GroceryList from './GroceryList';
const GroceryInput = () => {
    let [input,setInput]=useState("");
    const [renderData,setRenderData]=useState(true)
   const addData=()=>{
    console.log(input)
        axios.post("http://localhost:8085/data",{Item:input})
        setInput("")
        setRenderData(!renderData)
    }

    
    //http://localhost:8084/groceryData//
    
  return (
    <div>
      <input placeholder='enter the grocey item' onChange={(event)=>setInput(event.target.value)}/>
      <button onClick={()=>addData()}>add item</button>

      <div>
        <GroceryList renderPage={renderData}></GroceryList>
      </div>
    </div>
  )
}

export default GroceryInput
