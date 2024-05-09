import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/cheese3.mp4";
import { useTranslation } from "../context/LanguageContext";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  /* direction:rtl; */
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;
const Button = styled.div`
  /* background-color:#000; */
  position:absolute;
  color:#fff;
  z-index:100;
  left:24px;
  top:8px;
  font-size:3vh;

`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 3, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  const {t,changeLanguage,language}=useTranslation()
  const videoMarkup = `
  <video
    loop
    muted
    autoplay
    playsinline
    src="${MainVideo}"
  ></video>
`;
  return (
    <VideoContainer data-scroll>
             {language=="en"? <Button onClick={()=>changeLanguage("fa")}>FA</Button>:
                       <Button onClick={()=>changeLanguage("en")}>EN</Button>  }
  

              {/* <Button >En</Button> */}

      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
{   language=="en"?         <div>           
      
              <motion.h1
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="4"
              >
                C
              </motion.h1>     
              <motion.h1
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="6"
              >
              h
              </motion.h1>
    
              <motion.h1
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="6"
              >
              e
              </motion.h1>
              <motion.h1
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="6"
              >
              e
              </motion.h1>
              <motion.h1
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="6"
              >
              s
              </motion.h1>
              <motion.h1
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="6"
              >
              e
              </motion.h1>
              
            </div>:    
            <>
                      <motion.p
                      variants={item}
                      data-scroll
                      data-scroll-delay="0.13"
                      data-scroll-speed="6"
                      style={{fontSize:"4vh"}}
                    >
                     رویداد
                    </motion.p>      
            <motion.h1
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="6"
                style={{fontSize:"12vh"}}
              >
               پنیر
              </motion.h1></>  }
       {language=="en" && <div>             
           <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.19"
            data-scroll-speed="4"
            style={{fontSize:"3vh"}}
          >
            {"Event"}

          </motion.h1>     

 


        </div>}
        {/* <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.14"
          data-scroll-speed="2"
        >
          cheese
        </motion.h2> */}
      </Title>
      <div dangerouslySetInnerHTML={{ __html: videoMarkup }} />

      {/* <video src={MainVideo} type="video/mp4" autoPlay muted loop /> */}
    </VideoContainer>
  );
};

export default CoverVideo;
