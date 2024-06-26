import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export async function getHotels() {
    try {
        const response = await axios.get(`${BASE_URL}/Hotels`, {
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
}

export async function addHotel(hotel) {
    try {
        const response = await axios.post(`${BASE_URL}/Hotels`, hotel, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
}

export async function addBooking(booking) {
    try {
        const response = await axios.post(`${BASE_URL}/Bookings`, booking, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
}

export async function getBookings() {
    try {
        const response = await axios.get(`${BASE_URL}/Bookings`, {
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
}

export async function getHotel(id) {
    try {
        const response = await axios.get(`${BASE_URL}/Hotels/${id}`);
        return response.data;
    } catch (error) {
        throw error.response;
    }
}

export async function deleteBooking(id) {
    try {
        const response = await axios.delete(`${BASE_URL}/Bookings/${id}`);
        return response.data;
    } catch (error) {
        throw error.response;
    }
}