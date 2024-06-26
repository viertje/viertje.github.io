import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import HotelTable from '../components/Tables/HotelTable';
import HotelSelect from '../components/Selects/HotelSelect';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getHotels } from '../api/api';
import AddHotelForm from '../components/FormComponents/AddHotelForm';

function Hotels() {

    const [openModal, setOpenModal] = useState(false);

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            getHotels().then((response) => setHotels(response));
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    }, [])

    if (loading) return <div className='w-full flex justify-center mt-48' color="failure" aria-label="Spinner" size="xl">Loading</div>;
    if (error) return <p>Error: {error}</p>;
    

    return (
        <div>
            <div className='flex justify-between mb-8'>
                <div className='text-4xl'>Hotels</div>
                <button className='hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md' onClick={() => setOpenModal(true)}>Hotel Hinzufügen</button>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
                <div>
                    <HotelSelect />
                </div>
 
                <button className="hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md">Suchen</button>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md p-2 my-8">

            {hotels.map((i, key) => {
                return(
                    <HotelTable hotel={i} key={key} />
                )
            })}
            </div>


            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg-gray-600">Hotel hinzufügen</Modal.Header>
                <Modal.Body className="bg-gray-700">
                    <AddHotelForm />
                </Modal.Body>
            </Modal>
        </div>


    );
}

export default Hotels;
