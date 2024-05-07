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
position:relative;
  background-color: white;
  overflow:auto;
  width:50vw;
  height:80vh;
  padding:30px;
  max-height:800px;
  border-radius: 8px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 40em) {
    width:80vw;

  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
  padding:16px;
 width:20px; 
  height:20px; 
  display:flex;
  align-items:center;
  justify-content:center;
  color: ${(props) => props.theme.white}; // Set text color
  border: none;
  border-radius: 50%; // Make the button round
  cursor: pointer;
  /* transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryDark}; // Darker color on hover
  } */

  // Adjust styles for different screen sizes using media queries
  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.3rem;
  }
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
            onScroll={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeModal}>X</CloseButton>
            {children}
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default Modal;
