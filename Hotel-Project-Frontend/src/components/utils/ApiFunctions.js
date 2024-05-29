import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9192",
});

export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  const response = await api.post("/rooms/add/new-room", formData);
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}

// This function gets all room types from the database
export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room/types");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching the room types");
  }
}

// This function gets all rooms from the database

export async function getAllRooms() {
  try {
    const result = await api.get("/rooms/all-rooms");
    return result.data;
  } catch (error) {
    throw new Error("Error fetching rooms");
  }
}

// Deletes the room by id
export async function deleteRoom(roomId) {
  try {
    const result = await api.delete(`/rooms/delete/room/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error("Error deleting room");
  }
}

// Updates the room
export async function updateRoom(roomId, roomData) {
  const formData = new FormData();
  formData.append("roomType", roomData.roomType);
  formData.append("roomType", roomData.roomPrice);
  formData.append("roomType", roomData.photo);
  const response = await api.put(`/rooms/update/${roomId}`, formData);
  return response;
}

// This function gets a room by it's ID
export async function getRoomById(roomId) {
  try {
    const result = await api.get(`/rooms/room/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error(`Error fetching room ${error.message}`);
  }
}

export async function bookedRoom(roomId, booking) {
  try {
    const response = await api.post(
      `/bookings/room/${roomId}/booking`,
      booking
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error booking the room: ${error.message}`);
    }
  }
}

export async function getAllBookings() {
  try {
    const result = await api.get("/bookings");
    return result.data;
  } catch (error) {
    throw new Error(`Error fetching bookings: ${error.message}`);
  }
}
export async function getBookingByConfirmationCode(confirmationCode) {
  try {
    const results = await api.get(`/bookings/confirmation/${confirmationCode}`);
    return result.data;
  } catch (error) {
    if (error.response && error.resopnse.data) {
      throw new Error(error.resopnse.data);
    } else {
      throw new Error(`Error finding the booking: ${error.message}`);
    }
  }
}

export async function cancelBOoking(bookingId) {
  try {
    const result = await api.delete(`/bookings/booking/${bookingId}/delete`);
    return result.data;
  } catch (error) {
    throw new Error(`Error cancelling booking: ${error.message}`);
  }
}
