import "./BookingPage.css"
import React from "react";
import Modal from "react-modal";
import BookingPage from "./BookingPage"; // Update the path if needed

Modal.setAppElement("#root"); // Set the root element for accessibility

const BookingModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Booking Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <button className="close" onClick={onRequestClose}>
        &times;
      </button>
      <BookingPage />
    </Modal>
  );
};

export default BookingModal;
