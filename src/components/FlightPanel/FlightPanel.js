import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { getFlightsFromAirport } from '../../api/api';


export default function FlightPanel() {
    const [flights, setFlights] = useState([]);
    const cities = [...new Set(flights.map(flight => flight.cityDe))];
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            getFlightsFromAirport().then((response) => setFlights(response));
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    }, [])

    if (loading) return <div className='w-full flex justify-center mt-48' color="failure" aria-label="Spinner" size="xl">Loading</div>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 grid grid-cols-3 p-2">
                <Link to="/Fluege" className='h-auto w-full bg-white m-4 p-4 rounded-md flex flex-col'>
                <div className='text-black text-center'>Flüge</div>
                    <img className="object-cover rounded-md h-full w-full" src="/symbols/airplane.jpg" alt="" />
                </Link>
                <div className='col-span-2 grid grid-cols-2 gap-4 p-4 place-content-center'>
                    
                    <select className="text-black rounded-md text-center hover:scale-105 h-12" value={city} defaultValue="Stadt auswählen" onChange={(e) => setCity(e.target.value)}>
                        <option disabled>Stadt</option>
                        {cities.map((i, key) => (
                            <option key={key} value={i}>{i}</option>
                        ))}
                    </select >


                    <div className=''>
                        <div className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md">
                        <Link to={"/Fluege/"+city} className="text-center">
                        <div>Suchen</div>
                        </Link>

                        </div>
                    </div>
                </div>


            </div>
        </>

    );
};




