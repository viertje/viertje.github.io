import { useState } from 'react';
import { Modal } from 'flowbite-react';
import Form from '../Form/From';

export default function SideBasket({ array, removeItem }) {
    const [openModal, setOpenModal] = useState(false);

    return (            
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
    <Modal.Header className="bg-gray-600">Your Basket</Modal.Header>
    <Modal.Body className="bg-gray-700">

        <Form array={array} />
    </Modal.Body>
</Modal>
);
}