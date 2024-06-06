import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../common/Header";

const BookingSuccess = () => {
  const location = useLocation();
  const message = location.state?.message;
  const error = location.state?.error;
  return (
    <div className="container">
      <Header title="Booking success" />
      <div className="mt-5">
        {message ? (
          <div>
            <h3 className="text-success"> Room successfully booked!</h3>
            <p className="text-success py-5">{message}</p>
          </div>
        ) : (
          <div>
            <h3 className="text-danger"> Error while Booking the Room!</h3>
            <p className="text-danger">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSuccess;
