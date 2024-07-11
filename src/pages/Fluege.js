import React from 'react';
import { useState, useEffect } from 'react';
import FlightTable from '../components/Tables/FlightTable';
import { getFlightsFromAirport } from '../api/api';
import { useParams } from 'react-router-dom';

export default function Fluege() {
    const { flightLocation } = useParams();


    const [flights, setFlighs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cities = [...new Set(flights.map(flight => flight.cityDe))];
    const [selectedCity, setSelectedCity] = useState(flightLocation);


    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const filteredFlights = selectedCity
        ? flights.filter(flight => flight.cityDe === selectedCity)
        : flights;

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
            <div className='flex justify-center mb-8'>
                <div className='text-4xl '>Flüge</div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
            <select className="text-black rounded-md text-center hover:scale-105 mx-2" onChange={handleCityChange} defaultValue="Stadt auswählen" value={selectedCity}>
                            <option disabled>Stadt</option>
                            {cities.map((i, key) => (
                                <option key={key} value={i}>{i}</option>
                            ))}
                        </select>
                        <button className='hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md'>Flug Hinzufügen</button>

            </div>
            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md p-2 my-8">
            {filteredFlights.slice(0, 20).map((i, key) => {
                return(
                    <FlightTable flight={i} key={key} />
                )
            })}
            </div>
        </div>
    );
}

