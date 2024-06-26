import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import HotelSelect from '../Selects/HotelSelect';

export default function HotelPanel() {

    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 flex p-2 place-items-center justify-between">
    
                <Link to="/Hotels" className='h-auto w-full bg-white m-4 p-4 rounded-md flex flex-col'>
                    <div className='text-black text-center'>Hotels</div>
                    <img className="object-cover rounded-md h-full w-full" src="/symbols/hotel.jpg" alt="" />
                </Link>
                <div className='h-12'>
                    <HotelSelect />
                </div>
                <button className="h-12 hover:scale-105 text-black bg-gradient-to-r mx-4 px-8 from-gray-200 to-indigo-900 rounded-md">Suchen</button>

            </div>
        </>

    );
};
