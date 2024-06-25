import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function Hotels() {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div>
            <div className='flex justify-between mb-8'>
                <div className='text-4xl'>Hotels</div>
                <button className='hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md'>Hotel Hinzufügen</button>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
                <div>
                    <select className="text-black rounded-md text-center hover:scale-105 mx-4 w-72">
                        <option disabled>Von</option>
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

            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between mt-8 h-auto">
            </div>
        </div>
    );
}

export default Hotels;
