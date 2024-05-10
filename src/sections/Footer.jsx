import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Images/Swiss.png";
import LogoFooter from "../assets/Images/switzercheese.jpeg";
import IstgahLogo from "../assets/Images/Istgah.png";
import { useTranslation } from "../context/LanguageContext";

import Boomi from "../assets/Images/Boomi.jpg";
import Hana from "../assets/Images/Hana.jpg";

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
    font-family:${(props) => props.language=="en"? "Kaushan Script":"Avini"} ;
    font-size: ${(props) => props.theme.fontxl};
    text-align:center;
    @media (max-width: 48em) {
      font-size: 2rem;
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
    direction:${(props) => props.language=="en"? "ltr":"rtl"} ;
    font-family:${(props) => props.language=="en"? "Kaushan Script":"Avini"} ;

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
  const {t,language}=useTranslation()

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
      <LogoContainer language={language}>

        <h4 data-scroll data-scroll-speed="-1" >
        {t("Swiss Embassy") }
        </h4>
        <h4 data-scroll data-scroll-speed="-1">
          {  t("Istgah")}
        </h4>
      </LogoContainer>
      <FooterComponent
        language={language}
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            {t("Home")}
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            {t("About")}
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#Cheeses")}>
          {t("Cheeses")}
          </li>

          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            {t("How to made")}
          </li>

        </ul>
        <Bottom>

        <div style={{display:"flex"}}>
        <img
          width="500"
          height="500"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"80px",height:"80px"}}
        />

         <img
          width="500"
          height="500"
          src={IstgahLogo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"100px",height:"100px",marginTop:"-8px"}}
        />
        
        </div>      
         <div> <a href="https://www.cheese.com">
        <img
          width="500"
          height="500"
          src={LogoFooter}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"100%",height:"100px"}}
        />
        </a></div>
        <div style={{display:"flex",gap:"8px"}}>


        <div>
       <a href="https://www.instagram.com/boomirestaurant?igsh=MzRlODBiNWFlZA==">

        <img
          width="500"
          height="500"
          src={Boomi}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"100%",height:"100px"}}
        />
        </a></div>
        <div>
        <a href="https://spahana.com/">

         <img
          width="500"
          height="500"
          src={Hana}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"100%",height:"100px"}}
        />
        </a></div>
        </div>
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
