import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import FlightTable from '../components/Tables/FlightTable';
import { getFlightsFromAirport } from '../api/api';

export default function Fluege() {
    const [startDate, setStartDate] = useState(new Date());

    const [flights, setFlighs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const handleClick = async () => {
        console.log(search);
            
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            getFlightsFromAirport().then((response) => setFlighs(response));
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
                    <input className="hover:scale-105 text-black rounded-md text-center w-44" type="text" placeholder="Stadt" value={search} onChange={((e) => setSearch(e.target.value))} />
                    <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md" onClick={handleClick}>Suchen</button>
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

