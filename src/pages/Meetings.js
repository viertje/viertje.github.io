import React from 'react';

export default function Meetings() {
    return (
        <div>
            <div className='text-4xl mb-8'>Meetings</div>
        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
            <div class="flex gap-2 mx-8 place-items-center">
            <div className='text-center'>Name:</div>
            <input className="text-black rounded-md text-center hover:scale-105 m-4 h-full w-72 bg-white" />
            </div> 
            <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md">Suchen</button>
        </div>
        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex flex-col justify-between mt-8 h-auto">
            <div className='place-self-center text-4xl'>Meetings</div>
        </div> 
    </div>
    );
}
