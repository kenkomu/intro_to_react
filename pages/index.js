import Card from "@/components/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {

  async function getALLTransactions(){
    await axios.get("/api/get-all-transactions").then(res =>{
      console.log(res.data)
    })
  }

  useEffect(() => {
     
  }, [])
  return (
    <>
     
     <Navbar />


  
    <main className="min-h-screen pt-16 flex flex-col items-center ">
      <Card 
        imageUrl="/komu.jpg"
        profileName="Komu"
        content="I started learning how to use next.js last week. I will be posting my progress this weekend."
      />
      
      
    </main>
     <Footer /> 
     
    </>
  )
}
