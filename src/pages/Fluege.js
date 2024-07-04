import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import FlightTable from '../components/Tables/FlightTable';
import { getFlights } from '../api/api';

export default function Fluege() {
    const [startDate, setStartDate] = useState(new Date());

    const [flights, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            getFlights().then((response) => setHotels(response));
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
            <div className='flex justify-between mb-8'>
                <div className='text-4xl '>Flüge</div>
                <button className='hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md'>Flug Hinzufügen</button>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
                <div>
                    <select className="text-black rounded-md text-center hover:scale-105 mx-4 w-72">
                        <option disabled>Von</option>
                        <option value="London">London</option>
                    </select>
                    <select className="text-black rounded-md text-center hover:scale-105 w-72">
                        <option disabled>Nach</option>
                        <option value="London">London</option>
                    </select>
                </div>
                <div>
                    <DatePicker className="hover:scale-105 text-black rounded-md text-center w-44" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div>
                    <DatePicker className="hover:scale-105 text-black rounded-md text-center w-44" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md">Suchen</button>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md p-2 my-8">
            {flights.slice(0, 20).map((i, key) => {
                return(
                    <FlightTable flight={i} key={key} />
                )
            })}
            </div>
        </div>
    );
}

