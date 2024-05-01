import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:100;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  overflow:auto;
  width:80vw;
  height:70vh;
  padding:30px;
  max-height:800px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Modal = ({ showModal, closeModal, selectedIndex,children }) => {
  return (
    <>
      {showModal && (
        <ModalBackdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {children}
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default Modal;
