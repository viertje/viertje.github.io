import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import AddFlightForm from '../FormComponents/AddFlightForm';

export default function FlightTable({flight}) {

  const [openModal, setOpenModal] = useState(false);

  const startDate = new Date(flight.STA);

  const formattedStartDate = startDate.toISOString().split('T')[0];


  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md p-2 my-1">
            <div className='grid grid-cols-4 mx-2 my-4 px-12 py-4 border-2 rounded-md border-white place-items-center'>
              <div className='flex justify-between gap-2'>
              {!flight.ETA ? <div>Nach</div> : <div>Von</div>}
              <div>{flight.cityDe}</div>
              </div>

              <div>{formattedStartDate}</div>
              <div>{flight.statusTextDe}</div>
              <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md" onClick={() => setOpenModal(true)}>Details</button>
              <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg-gray-600">{flight.cityDe}</Modal.Header>
                <Modal.Body className="bg-gray-700">
                <div className="space-y-6 flex justify-evenly">
            <img className="object-contain rounded-md aspect-square h-48" src={flight.airlineLogo} alt="" />
            <div className="text-center leading-relaxed text-white dark:text-gray-400">
              <div className="text-2xl">{flight.airline}</div>
              <div>{flight.airportName}</div>
              <div>{flight.FLN}</div>
              <div>{flight.model}</div>
              <div>{formattedStartDate}</div>
              <AddFlightForm flight={flight} />

            </div>
          </div>
            </Modal.Body>
            </Modal>
            </div>
      </div>
    </>
  );
};
