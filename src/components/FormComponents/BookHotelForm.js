import React, { useState, useEffect } from 'react';
import { addBooking, getHotel } from '../../api/api';
import DatePicker from 'react-datepicker';

export default function AddHotelForm({id}) {
    const [name, setName] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [hotel, setHotel] = useState(null);
    useEffect(() => {
        getHotel(id).then((response) => setHotel(response));
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedStartDate = startDate.toISOString().split('T')[0];
        const formattedEndDate = startDate.toISOString().split('T')[0];
        try {
            await addBooking({
                name: name,
                hotel: {hotel},
                startDate: formattedStartDate,
                endDate: formattedEndDate
            })
            alert('Booking added');
            window.location.reload();
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='grid grid-cols-2 gap-2 p-4 m-4'>
            <input className='mx-2 rounded-md text-black' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
            <div>
            <DatePicker className="text-black rounded-md text-center w-44" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div>
            <DatePicker className="text-black rounded-md text-center w-44" selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>
            </div>
            <div className='flex justify-center'>
                <button className='place-self-center bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950 border-2 border-white rounded-md p-2' type="submit">Buchen</button>

            </div>
        </form>
    );
};

