import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/4High.png";
import img2 from "../assets/Images/4.png";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
import img10 from "../assets/Images/pexels-pixabay-302457.jpg";
import Modal from "../components/Modal";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 2rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 4px;
  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 30%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 25%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const ImgModal=styled.img`
border-radius:24px;
overflow:hidden;
height:40vh;
width:100%;
    @media (max-width: 48em) {
      height:40vh;
  }
`
const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "",index,openModal }) => {
  const handleClick = () => {
    openModal(index);
  };
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      onClick={handleClick}

    >
      <img width="400" height="550" src={img} alt={title} onClick={()=>console.log("index",index)}/>
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

 const IranianCheeses= [
  { img: img1, title: 'Raclette', index: 4 },
  { img: img2, title: 'Raclette1', index: 1 },
  { img: img2, title: 'Raclette2', index: 2 },
  { img: img2, title: 'Raclette3', index: 3 },
  { img: img2, title: 'Raclette4', index: 4 },
  { img: img2, title: 'Raclette5', index: 5 },
  { img: img2, title: 'Raclette6', index: 6 },
  { img: img2, title: 'Raclette7', index: 7 },
  { img: img2, title: 'Raclette8', index: 8 },
  { img: img2, title:'Raclette9', index: 9 },
];
const SwissCheeses= [
  { img: img2, title: 'Raclette', index: 4 },
  { img: img2, title: 'Raclette1', index: 1 },
  { img: img2, title: 'Raclette2', index: 2 },
  { img: img2, title: 'Raclette3', index: 3 },
  { img: img2, title: 'Raclette4', index: 4 },
  { img: img2, title: 'Raclette5', index: 5 },
  { img: img2, title: 'Raclette6', index: 6 },
  { img: img2, title: 'Raclette7', index: 7 },
  { img: img2, title: 'Raclette8', index: 8 },
  { img: img2, title:'Raclette9', index: 9 },
];
const [cheeses,setCheeses]=useState(SwissCheeses)
const [isSwiss,setIsSwiss]=useState(true)
useEffect(()=>{
  if(isSwiss){
    setCheeses(SwissCheeses)

  }else{
    setCheeses(IranianCheeses)

  }
},[isSwiss])
  const openModal = (index) => {
    console.log("index123",index);
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIndex(null);
  };

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();


    
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          onToggle: self => {
            const scrollOffset = Math.ceil(self.progress * (cheeses.length - 1));
            setActiveIndex(scrollOffset);
          }
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);




  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const element = Horizontalref.current;
  //   console.log("element.offsetWidth",element.offsetWidth);
  //   // Create a ScrollTrigger to detect scroll position changes
  //   ScrollTrigger.create({
  //     trigger: element,
  //     start: "top top",
  //     end: () => `+=${element.offsetWidth}`, // Adjust this as per your requirement
  //     onToggle: self => {
  //       const scrollOffset = Math.ceil(self.progress * (cheeses.length - 1));
  //       setActiveIndex(scrollOffset);
  //     }
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach(st => st.kill());
  //   };
  // }, [cheeses]);
  return (
    <Section ref={ref} id="shop">
     <Modal showModal={showModal} closeModal={closeModal} selectedIndex={selectedIndex} >
       <ImgModal  src={cheeses.length-1 &&cheeses[selectedIndex]?.img} />
       <h3>HISTORY: </h3>
       <p style={{fontSize:"1.5vh"}}>According to legend, Léon was the name of the Valais wine-grower who invented Raclette cheese. On a cold day, he warmed up a piece of cheese over an open log fire, rather than eating it raw, and this quintessential Valais delicacy was born.

The presence of cheese in Valais has been documented since the 4th century BC. Alpine cheese was famous during the Roman period. Later on, it was often used as a means of payment, in lieu of wages to workers or as an export product. Cheese melting has been known in Valais as far back as the year 1574. The term ‘Raclette‘ comes from the local French dialect (racler = to scrape), and it became the official name for this cheese in 1874.

To this day, Valais cheese makers follow a recipe which has been passed down for generations, taking raw milk and making into the best and most authentic product which Valais has to offer: Raclette du Valais AOP.
</p>
     <h3>PROPERTIES:</h3>
     <p style={{fontSize:"1.5vh"}}>Composition: Raclette du Valais is a semi-hard cheese from the mountains, made from full-fat untreated cow’s milk.

Area of origin: the milk is produced and the cheese is made only in Valais, in a dairy or at a farm on the alpine pastures

Flavor: The alpine plants on which the cattle feed give their flavor to the Raclette, so the taste of the cheese varies depending on where the cows graze. A fresh taste (like fresh butter or cream) with a slightly acid tang dominates the floral and fruity notes in Raclette du Valais. In other forms of Raclette to be eaten sliced, a salty, slightly milky flavor with a mildly acid tang dominates the floral and fruity notes.
</p>
     </Modal>

      <Title data-scroll data-scroll-speed="-1">
        {isSwiss? "Swiss Cheeses":"Iranina Cheeses"}
      </Title>
      <Left>
        <div>
      <h2 onClick={()=>setIsSwiss(false)}>Iraninan Cheese</h2>
      <h2 onClick={()=>setIsSwiss(true)}>Swiss Cheese</h2>
      </div>
      </Left>
      <Right data-scroll ref={Horizontalref}>
    {cheeses.map((cheese)=>(
        <Product img={cheese.img} title={cheese.title} index={cheese.index} openModal={openModal} />
    ))}
      </Right>
    </Section>
  );
};

export default Shop;
