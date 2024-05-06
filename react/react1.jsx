import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MyModal = ({ open, disableGlobalScroll, children }) => {
  const [modalOpen, setModalOpen] = useState(open);

  useEffect(() => {
    setModalOpen(open);
    if (disableGlobalScroll) {
      document.body.style.overflow = open ? 'hidden' : 'auto';
    }
  }, [open, disableGlobalScroll]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return modalOpen ? ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.body
  ) : null;
};

export default MyModal;
