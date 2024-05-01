import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { motion, useScroll } from "framer-motion"

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const DetailContainer = styled.li`
  margin: 16px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Detail = () => (
  <DetailContainer>
    <div>
      <h3>Google</h3>
      <p>Software Engineer</p>
    </div>
  </DetailContainer>
);

const TimeLine = () => {
    const ref=useRef()
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["start end","center start"]
    });
  console.log("scrollYProgress",scrollYProgress);
  return (
    <Section id="fixed-target" className="about">
            <motion.div style={{ scaleX: scrollYProgress }} />  
      <div style={{ marginLeft: '64px' }}>
        <h2>Experiences</h2>
        <div ref={ref} style={{ position: 'relative', width: '75%', margin: 'auto' }}>
          <motion.div

            style={{
                scaleY:scrollYProgress,
              position: 'absolute',
              left: '8px',
              top: '0',
              width: '4px',
              height: '100%',
              backgroundColor: 'black',
              transformOrigin: 'top',
            }}
          />
          <ul>
            <Detail />
          </ul>
          <ul>
            <Detail />
          </ul>
          <ul>
            <Detail />
          </ul>
          <ul>
            <Detail />
          </ul>
          <ul>
            <Detail />
          </ul>
          <ul>
            <Detail />
          </ul>
          <ul>
            <Detail />
          </ul>
          <ul>
            <Detail />
          </ul>

        </div>
      </div>
    </Section>
  );
};

export default TimeLine;