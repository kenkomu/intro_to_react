import Card from "@/components/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <>
     
     <Navbar />
    
    <div className="h-[100vh] flex flex-col gap-10 justify-center items-center pt-20">
      <Card imageUrl="/komu.jpg" profileName="Komu" content="I started learning how to use next.js last week. I will be posting my progress this weekend."/>
      <Card imageUrl="/img2.jpg" profileName="Pexel" content="Have a great week Coding Everyone"/>
      <Card imageUrl="/azziad.jpeg" profileName="Azziad" content="Someday you'll look back and understand why it all happened the way it did."/>
      
      
    </div>
     <Footer /> 
     
    </>
  )
}
