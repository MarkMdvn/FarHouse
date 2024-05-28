import React from "react";
import RoomCarousel from "../common/RoomCarousel";

const Home = () => {
  return (
    <section>
      <MainHeader />
      <section className="container">
        <RoomCarousel />
        <Parallax />
        <RoomCarousel />
        <HotelService />
        <Parallax />
      </section>
    </section>
  );
};

export default Home;
