import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Images/SwitzerlandLogo.png";
import LogoFooter from "../assets/Images/switzercheese.jpeg";
import IstgahLogo from "../assets/Images/imagecompressor 2/Untitled design-min.png";


const Section = styled.section`
  height: 100vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 16vw;
    height: auto;
  }

  h4 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};
text-align:center;
    @media (max-width: 48em) {
      font-size: 1rem;
      margin-top;8px;
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 2rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin:  4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>

        <h4 data-scroll data-scroll-speed="-1">
        سفارت سوییس 
        </h4>
        <h4 data-scroll data-scroll-speed="-1">
             موسسه فرهنگی هنری ایستگاه
        </h4>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            home
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            about
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#Cheeses")}>
          Cheeses
          </li>

          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            How to made
          </li>

        </ul>
        <Bottom>
        <img
          width="500"
          height="500"
          src={LogoFooter}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"200px",height:"100px"}}
        />
        <div style={{display:"flex",gap:"16px"}}>
        <img
          width="50"
          height="50"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"40px",height:"50px"}}
        />
        <img
          width="50"
          height="50"
          src={IstgahLogo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"50px",height:"50px"}}

        /></div>
          {/* <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2022. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by{" "}
            <a
              href="http://devdreaming.com"
              target={"_blank"}
              rel="dofollow noreferrer"
            >
              CodeBucks
            </a>
          </span> */}
          
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
