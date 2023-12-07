// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/restauranfood.jpg";
import BookingModal from "../BookingSection/BookingModal"; // Update the path if needed
import './Header.css';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={openModal} aria-label="On Click">Reserve Table</button>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </header>
  );
};

export default Header;