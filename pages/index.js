import Card from "@/components/card";
import Navbar from "@/components/navbar";
import axios from "axios";

// import { useState } from "


export default function Home() {

  
  async function fetchName(){
    await axios.get('/api/hello').then(res =>{
      console.log(res.data);
    })
  }
  return (
    <>
     <Navbar/>
     <button onClick={fetchName}>Get name</button>
    
      
     
    </>
  )
}
