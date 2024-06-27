import React, { useState, useEffect } from 'react';
import { addHotel, getHotels } from '../../api/api';

export default function BookHotelForm() {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('');

    const [data, setData] = useState(null);
    useEffect(() => {
        getHotels().then((response) => setData(response));
    }, [])

    const getID = () => {
        if (data) {
            return data.length + 1;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addHotel({
                id: getID(),
                name: name,
                country: country,
                city: city,
                price: price,
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
            <input className='rounded-md mx-2 text-black' type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country' required />
            <input className='rounded-md mx-2 text-black' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' required />
            <input className='rounded-md mx-2 text-black' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' required />
          
            </div>
            <div className='flex justify-center'>
            <button className='place-self-center bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950 border-2 border-white rounded-md p-2' type="submit">Hinzufügen</button>

            </div>
        </form>
    );
};

