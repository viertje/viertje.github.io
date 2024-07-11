import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import HotelTable from '../components/Tables/HotelTable';
import { Modal } from 'flowbite-react';
import { getHotels } from '../api/api';
import AddHotelForm from '../components/FormComponents/AddHotelForm';
import { useParams } from 'react-router-dom';

function Hotels() {
    const { hotelLocation } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedCity, setSelectedCity] = useState(hotelLocation);
    const cities = [...new Set(hotels.map(hotel => hotel.city))];

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const filteredHotels = selectedCity
        ? hotels.filter(hotel => hotel.city === selectedCity)
        : hotels;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getHotels();
                setHotels(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div className='w-full flex justify-center mt-48' color="failure" aria-label="Spinner" size="xl">Loading</div>;
    if (error) return <p>Error: {error}</p>;

        

        return (
            <div>
                <div className='flex justify-center mb-8'>
                    <div className='text-4xl'>Hotels</div>
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
                        <select className="text-black rounded-md text-center hover:scale-105 mx-2" onChange={handleCityChange} defaultValue="Stadt auswählen" value={selectedCity}>
                            <option disabled>Stadt</option>
                            {cities.map((i, key) => (
                                <option key={key} value={i}>{i}</option>
                            ))}
                        </select>
                        <button className='hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md' onClick={() => setOpenModal(true)}>Hotel Hinzufügen</button>

                </div>
                <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md p-2 my-8">
                    {filteredHotels.map((i, key) => {
                        return (
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
