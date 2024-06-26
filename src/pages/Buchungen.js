import React from 'react';
import { useState, useEffect } from 'react';
import { getBookings } from '../api/api';
import HotelBookingTable from '../components/Tables/HotelBookingTable';

export default function Buchungen() {

    const [bookings, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            getBookings().then((response) => setBooking(response));
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
        <div>
            <div className='text-4xl mb-8'>Buchungen</div>
        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
            <div class="flex gap-2 mx-8 place-items-center">
            <div className='text-center'>Name:</div>
            <input className="text-black rounded-md text-center hover:scale-105 m-4 h-full w-72 bg-white" />
            </div> 
            <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md">Suchen</button>
        </div>
        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex flex-col justify-between mt-8 h-auto">
            <div className='place-self-center text-4xl'>Flüge</div>
        </div>
        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-4 p-2 flex flex-col justify-between mt-8 h-auto">
            <div className='place-self-center text-4xl'>Hotels</div>
            {bookings.map((i, key) => {
                return(
                    <HotelBookingTable booking={i} key={key} />
                )
            })}
        </div> 
    </div>
    );
}
