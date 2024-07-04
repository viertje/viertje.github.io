import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { getHotels } from '../../api/api';

export default function HotelSelect({search}) {
    
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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

    return(

    <select className="text-black rounded-md text-center hover:scale-105 mx-2" defaultValue="Stadt auswählen" value={search}>
    <option disabled>Stadt</option>
        {hotels.map((i, key) => (
            <option key={key} value={i.city}>{i.city}</option>
    ))}
    </select >
)
}