import React from 'react'

const BookingTable = ({bookingInfo, handleBookingCancellation}) => {

 const[filteredBookings, setFilteredBookings] = useState(bookingInfo)
 const filterBookings = (startDate, endDate) => {
  let filtered = bookingInfo
  if(startDate && endDate){
    filtered = bookingInfo
  }
 }

  return (
    <div>BookingTable</div>
  )
}

export default BookingTable