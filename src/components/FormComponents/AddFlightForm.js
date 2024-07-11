import React, { useState } from 'react';
import { addFlight } from '../../api/api';

export default function AddFlightForm({flight}) {
    const [name, setName] = useState('');

    const startDate = flight.STA ? new Date(flight.STA): null;

  const formattedStartDate = startDate ? startDate.toISOString().split('T')[0] : 'Keine Angabe';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addFlight({
                name: name,
                city: flight.cityDe,
                airport: flight.airportName,
                FLN: flight.FLN,
                date: formattedStartDate,
            })
            alert('Hotel added');
            window.location.reload();
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='grid grid-cols-2 gap-4 p-4 m-4'>
            <input className='mx-2 rounded-md text-black' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
          
            </div>
            <div className='flex justify-center'>
            <button className='place-self-center bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950 border-2 border-white rounded-md p-2' type="submit">Hinzufügen</button>

            </div>
        </form>
    );
};

