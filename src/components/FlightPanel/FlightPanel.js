import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { Link } from "react-router-dom"

export default function FlightPanel({ title, description }) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 grid grid-cols-3 p-2">
                <Link to="/Fluege" className='h-auto w-full bg-white m-4 p-4 rounded-md flex flex-col'>
                <div className='text-black text-center'>Flüge</div>
                    <img className="object-cover rounded-md h-full w-full" src="/symbols/airplane.jpg" alt="" />
                </Link>
                <div className='col-span-2 grid grid-cols-2 gap-4 p-4'>
                    
                    <select className="text-black rounded-md text-center hover:scale-105">
                        <option disabled>Von</option>
                        <option value="London">London</option>
                    </select >
                    <select className="text-black rounded-md text-center hover:scale-105">
                        <option disabled>Nach</option>
                        <option value="London">London</option>
                    </select >
                    <div>
                    <DatePicker className="hover:scale-105 text-black rounded-md text-center w-44" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                    <div>
                    <DatePicker className="hover:scale-105 text-black rounded-md text-center w-44" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>

                    <div className='col-span-2 flex justify-center '>
                        <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md">Suchen</button>
                    </div>
                </div>


            </div>
        </>

    );
};




