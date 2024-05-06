import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/Images/SwitzerlandLogo.png";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg{
      width: 20vw;
    }
  }

  svg {
    width: 10vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,

      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;
  text-align:center;
  width:100%;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* <img src={star} alt="Wibe Fashion" /> */}

      <Text variants={textVariants} initial="hidden" animate="visible">
      سفارت سوییس با مشارکت موسسه فرهنگی هنری ایستگاه برگزار میکند
      </Text>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"16px",gap:"8px"}}>
      <img
          width="500"
          height="500"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"30px",height:"30px"}}
        />
              <img
          width="500"
          height="500"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"30px",height:"30px"}}
        /></div>
    </Container>
  );
};

export default Loader;
