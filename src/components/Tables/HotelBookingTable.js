import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { deleteBooking } from '../../api/api';


export default function HotelBookingTable({booking}) {

  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async (id) => {
    try {
        console.log('Deleting booking with id:', id);
        await deleteBooking(id);
        alert('Booking deleted');
        window.location.reload();

    } catch (error) {
        console.error('Error deleting product:', error);
    }
};


  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md p-2 my-1">
            <div className='flex justify-between mx-2 my-4 px-12 py-4 border-2 rounded-md border-white place-items-center'>
              <div >{booking.name}</div>
              <div >{booking.hotel.hotel.name}</div>
              <div >{booking.hotel.hotel.city}</div>
              <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md" onClick={() => setOpenModal(true)}>Details</button>
              <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg-gray-600">Booking number: {booking.id}</Modal.Header>
                <Modal.Body className="bg-gray-700">
                <div className="space-y-6 flex justify-evenly">
            <img className="object-contain rounded-md aspect-square h-48" src="/items/1.jpg" alt="" />
            <div className="text-center leading-relaxed text-white dark:text-gray-400">
              <div className="text-2xl">{booking.name}</div>
              <div>{booking.hotel.hotel.name}</div>
              <div>{booking.hotel.hotel.city}</div>
              <div>Von:{booking.startDate}</div>
                <div>Bis: {booking.endDate}</div>
              <div className='mb-2'>{booking.hotel.hotel.price} CHF</div>
                <div className='flex justify-between gap-4'>
                <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md">Ändern</button>
                <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md" onClick={() => handleDelete(booking.id)}>Löschen</button>
                </div>
            </div>
          </div>

            </Modal.Body>
            </Modal>
            </div>
      </div>
    </>
  );
};
