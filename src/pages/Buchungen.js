import React from 'react';
import { useState, useEffect } from 'react';
import { getBookings, getFlights } from '../api/api';
import HotelBookingTable from '../components/Tables/HotelBookingTable';
import FlightBookingTable from '../components/Tables/FlightBookingTable';

export default function Buchungen() {

    const [bookings, setBooking] = useState([]);
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            getBookings().then((response) => setBooking(response));
            getFlights().then((response) => setFlights(response));
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
                <div className='flex justify-center mb-8'>
                <div className='text-4xl '>Buchungen</div>
            </div>

        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex flex-col justify-between mt-8 h-auto">
            <div className='place-self-center text-4xl'>Flüge</div>
            {flights.map((i, key) => {
                return(
                    <FlightBookingTable flight={i} key={key} />
                )
            })}
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
