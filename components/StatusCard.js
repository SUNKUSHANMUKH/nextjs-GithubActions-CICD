"use client";

import { useEffect, useState } from "react";

export default function StatusCard() {

  const [status,setStatus] = useState("Checking...");

  useEffect(()=>{

    fetch("/api/hello")
      .then(res=>res.json())
      .then(data=>{
        setStatus(data.message)
      })
      .catch(()=>{
        setStatus("API unreachable")
      })

  },[])

  return(

    <div style={{
      marginTop:"20px",
      padding:"20px",
      border:"1px solid #ccc",
      borderRadius:"10px"
    }}>

      <h2>Application Status</h2>

      <p>{status}</p>

    </div>

  )
}