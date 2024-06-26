import React from "react";
import Card from "../components/Card/Card";
import FlightPanel from "../components/FlightPanel/FlightPanel";
import HotelPanel from "../components/HotelPanel/HotelPanel";

const Home = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="text-4xl mb-8 bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md p-4">Die Seite für Ihre Geschäftsreisen</div>
            </div>
                <div className="grid gap-32 grid-cols-3">
                    <Card image="/items/1.jpg" title="San F" description="lalalal" />
                    <Card image="/items/2.jpg" title="lalalalla" description="lalalal" />
                    <Card image="/items/3.jpg" title="lalalalla" description="lalalal" />
                </div>
                <div className="grid gap-8 grid-cols-2 my-8">
                    <HotelPanel /> 
                    <FlightPanel />          
         
                </div>
        </>
    )
  };
  
  export default Home;
  