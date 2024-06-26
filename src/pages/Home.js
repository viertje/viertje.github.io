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
                    <Card image="/items/1.jpg" title="Entdecken Sie San Francisco!" description="Als Herzstück der globalen Innovation bietet die Stadt einzigartige Geschäftsmöglichkeiten in Technologie, Finanzen und Biotechnologie." />
                    <Card image="/items/2.jpg" title="Geschäftsmöglichkeiten in Santa Clara!" description="Im Herzen des Silicon Valley gelegen, bietet Santa Clara ideale Bedingungen für Innovation und Wachstum." />
                    <Card image="/items/3.jpg" title="Erleben Sie das Wirtschaftszentrum San José!" description="Als Hauptstadt des Silicon Valley bietet San José eine Fülle an Geschäftsmöglichkeiten in Technologie, Finanzen und Innovation." />
                </div>
                <div className="grid gap-8 grid-cols-2 my-8">
                    <HotelPanel /> 
                    <FlightPanel />          
         
                </div>
        </>
    )
  };
  
  export default Home;
  