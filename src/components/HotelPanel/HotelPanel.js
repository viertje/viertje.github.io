import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getHotels } from '../../api/api';


export default function HotelPanel() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            getHotels().then((response) => setHotels(response));
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
            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 flex p-2 place-items-center justify-between">
    
                <Link to="/Hotels" className='h-auto w-full bg-white m-4 p-4 rounded-md flex flex-col'>
                    <div className='text-black text-center'>Hotels</div>
                    <img className="object-cover rounded-md h-full w-full" src="/symbols/hotel.jpg" alt="" />
                </Link>
                <div className='h-12'>
                <select className="text-black rounded-md text-center hover:scale-105 mx-2" value={city} onChange={(e) => setCity(e.target.value)} defaultValue="Stadt auswählen">
    <option disabled>Stadt</option>
        {hotels.map((i, key) => (
            <option key={key} value={i.city}>{i.city}</option>
    ))}
    </select >
                </div>
                <Link to={":"+city} className="h-12 hover:scale-105 text-black bg-gradient-to-r mx-4 px-8 from-gray-200 to-indigo-900 rounded-md">Suchen</Link>

            </div>
        </>

    );
};
