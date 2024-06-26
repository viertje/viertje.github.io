import React from 'react';

export default function Card({ image, title, description }) {
    return (
        <>
            <div className="hover:scale-105 bg-gradient-to-r from-blue-900 to-neutral-800 h-72 w-auto rounded-md grid grid-cols-1 place-content-center transition hover:duration-300 ease-in-out">
                <img className="place-self-center object-cover rounded-t-md aspect-square h-full w-full" src={image} alt="" />
                <div className="p-2">
                    <div className="">{title}</div>
                    <div className="text-sm">{description}</div>
                </div>
            </div>
        </>

    );
};
