import React from 'react';
import MeetingTable from '../components/Tables/MeetingTable';
import { useEffect, useState } from 'react';
import { getMeetings } from '../api/api';
import { Modal } from 'flowbite-react';
import AddMeetingForm from '../components/FormComponents/AddMeetingForm';


export default function Meetings() {

    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [openModal, setOpenModal] = useState(false);

    const [filterText, setFilterText] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  };

  // Filter hotels based on the input text
  const filteredMeetings = filterText
    ? meetings.filter(meeting => meeting.name.toLowerCase().includes(filterText.toLowerCase()))
    : meetings;



    useEffect(() => {
        const fetchData = async () => {
          try {
            getMeetings().then((response) => setMeetings(response));
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
            <div class="flex justify-center">
            <div className='text-4xl mb-8'>Meetings</div>
            </div>
           

        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex justify-between">
            <div class="flex gap-2 mx-8 place-items-center">
            <div className='text-center'>Name:</div>
            <input type='text' value={filterText} onChange={handleInputChange} className="text-black rounded-md text-center hover:scale-105 m-4 h-full w-72 bg-white" />
            </div> 
            <button className='hover:scale-105 text-black py-2 px-8 bg-gradient-to-r from-gray-200 to-indigo-900 rounded-md' onClick={() => setOpenModal(true)}>Meeting Hinzufügen</button>

        </div>
        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 rounded-md gap-8 p-2 flex flex-col justify-between mt-8 h-auto">
        {filteredMeetings.map((i, key) => {
                return(
                    <MeetingTable meeting={i} key={key} />
                )
            })}
        </div> 

        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg-gray-600">Hotel hinzufügen</Modal.Header>
                <Modal.Body className="bg-gray-700">
                    <AddMeetingForm />
                </Modal.Body>
            </Modal>
    </div>
    );
}
