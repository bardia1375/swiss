import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/imagecompressor 2/1-min.png";
import img2 from "../assets/Images/imagecompressor 2/2-min.png";
// import img4 from "../assets/Images/3.png";
import img3 from "../assets/Images/imagecompressor 2/4-min.png";
import img5 from "../assets/Images/imagecompressor 2/5-min.png";
import img6 from "../assets/Images/imagecompressor 2/6-min.png";
import img7 from "../assets/Images/imagecompressor 2/7-min.png";
import img8 from "../assets/Images/imagecompressor 2/8-min.png";
import Modal from "../components/Modal";
import img4 from "../assets/Images/imagecompressor 2/3-min.png";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  /* width: 100%; */
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
    /* width: 30%; */
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
  padding-right: ${(props) => {
    console.log('showModal:', props.showModal);
    return props.showModal ? "3000px" : "100px";
  }};  background-color: ${(props) => props.theme.grey};
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
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
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
      
      transition={{ duration: 0.4 }}
      viewport={{ once: false, amount: "all" }}
      onClick={handleClick}
      

    >
      <img width="400" height="550" src={img} alt={title} onClick={()=>console.log("index",index)}/>
      <h1>{title}</h1>
      <p>{title&&"Click for more information"}</p>
    </Item>
  );
};

const Shop = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

 const IranianCheeses= [
  { img: img5, title: 'Black cheese', index: 0 ,History:"",Properties:"Then there’s Black cheese, a traditional specialty from Siahmezgi, a historical village in Shaft city, Gilan province. Known throughout Iran for its rich resources and abundant vegetation, Siahmezgi is also famous for its black cheese, a lasting art among the people of this region for centuries. The salty and sour taste of Black cheese harmonizes perfectly with the scent of Gilan’s beautiful nature."},

  { img: img6, title: 'Liqvan cheese', index: 1 ,History:"",Properties:"Consider Liqvan cheese, born on the verdant slopes of Arsbaran, where mountains kiss the sky and clear springs gush from the rocks. The village of Liqvan, nestled amidst this beauty, is renowned for its cheese, crafted from the fresh milk of sheep grazing in lush meadows and drinking from Sahand springs.The tale of an old man, a master cheese maker from Liqvan, is etched in countless travelogues, including Naser Khosro’s. His calloused hands, carrying the wisdom passed down from his ancestors, crafted cheeses of unparalleled taste and aroma. A traveler from Farang, drawn by the fame of Liqvan cheese, sought the secret of its unique taste from the old man. The old man spoke of Liqvan cheese as not merely food, but the fruit of love and generations of effort. Every drop of milk was a chapter from the history of the land, every mold of cheese a testament to their culture and tradition. The traveler, after tasting the cheese, was so captivated that he bought all the cheese the old man had, paying with his silver coins.Liqvan cheese, with its uniform texture and irregular holes, demands careful cutting to prevent the mold from breaking. Its strong salty taste is a testament to the variety of animal feed, the cut, and the heat, which contribute to the diversity of cheese flavors across Iran."},
  { img: img7, title: 'Shirizh cheese', index: 2 ,History:"",Properties:"In the western regions of Iran, among the Kurdish people of Kermanshah, there’s a traditional cheese called Shirizh. This cheese, made differently from local cheeses, is prepared by boiling yogurt or high-fat butter made from sheep or goat milk in a stone pot. The cheese that forms on the surface is transferred to a wooden container, mixed with a little salt and black seeds, and is a common sight in the backpack of every local person in the area."},
  { img: img8, title: 'Coloé cheese', index: 3 ,History:"",Properties:"Finally, consider Parisi or Coloé cheese from Kerman province, known as “small Iran” for its ethnic diversity. Skin cheese, made in the middle skin to increase its shelf life, is popular in this province. The local cheeses of Kerman, mostly processed in Sirjan, carry a special aroma and flavor, distinct from all the cheeses in other parts of Iran. Parisi cheese, usually eaten with cumin, a symbolic product of Kerman province, is an important part of the tradition and table of Kerman people."},
];
const SwissCheeses= [
  { img: img1, title: 'Gruyère', index: 0 ,History:"The region of Gruyère, in the canton of Fribourg, in the Center of Switzerland, has been known for its cheese production since the 12th century. Medieval chronicles mention the expertise of its inhabitants, who turned the milk production of their herds into full fat cheese. This product was even sold in France and Italy. The official recognition of the name “Gruyère” only happened in the 17th century, which also marked the first measures for the protection of the cheese’s origin through marking.However, it was only in 2001 that Gruyère cheese was granted Controlled Designation of Origni (AOC) at the national level. In 2011, it received the Protected Designation of Origin (AOP) for all of Europe."
  ,
  Properties:"Composition: Gruyère is a hard cheese made from unpasteurized milk Area of origin: the region of Gruyère, in the canton of Fribourg, Switzerland. The Gruyère is also produced in Fribourg, Vaud, Neuchâtel and some communes of the canton of Bern.Flavor: There are several types of Gruyère, depending on the duration of the maturation. The Gruyère “Réserve” is matured for more than 10 months, giving it a more intense flavour. Full-boded and fruity, it has a firm and slightly crumbly texture." },
  { img: img2, title: 'Tête de moine', index: 1,History:"Tête de Moine as a proper term has been used since about 1790, but the cheese has a much longer history.The monastery of Bellelay, located in the Jura region in Switzerland, was established in 1136 and confirmed by Pope Innocent II six years later. As early as 1192, or one century before the beginnings of the Swiss Confederation, the monks of the monastery Bellelay were first mentioned in connection with cheese. At that time they paid the annual rent on various properties with cheese made in their abbey. Time and again documents from subsequent centuries mention the use of the valuable cheese as a means of payment.",
  Properties:"Composition: Tete de moine is a full-fat, semi-hard cheese made from raw milk. Tête de Moine is not usually sliced, but shaved with a device called Girolle to obtain rosettes Area of origin: Canton of Jura and Bernese Jura, North-East of Switzerland Aroma and flavor: pure and aromatic aroma, more pronounced as it matures. Usually, it has a faint smell of rind and mushrooms. Tête de moine tastes of acidified milk, usually with a faint taste of rind and hay. Moderately salty and slightly tangy" },
  { img: img3, title: 'Sbrinz', index: 2,History:"The roots of Sbrinz AOP go far back to the 16th century, when cheese was gathered in Brienz for transport to Italy by mule. One of these was the cheese that would later become known as Sbrinz based on the Italian name “lo sbrinzo”. In the late Middle Ages, the extra-hard cheese “Sbrinz” was an export hit from Central Switzerland on northern Italian markets. Not least thanks to this cheese, the mule trail across the Grimsel and Gries passes developed into a well-established trade route between Switzerland and Italy – the Sbrinz route. Transport routes may have changed, but the cheese is still made in traditional fashion. Nowadays, the controlled origin from approximately 30 selected valley and mountain cheese dairies in the heart of Central Switzerland, the purely natural cheese production and the fresh raw milk from cows that eat only hay and grass, guarantee the consistently high quality.",Properties:"Composition: extra-hard cheese made from raw milk. After the extensive salt bath, the loaves cure at least 22 months to fully develop their distinctive flavour. Area of origin: Central Swiss cantons of Obwalden, Nidwalden, Lucerne and Zug. Nowadays, it is made in 22 selected valley and alpine cheese dairies in Central Switzerland.Flavor: Robust and spicy aroma, with fine salt crystals, fruity roasted flavors accompanied by a milky note" },
  { img: img4, title: 'Raclette', index: 3,History:"According to legend, Léon was the name of the Valais wine-grower who invented Raclette cheese. On a cold day, he warmed up a piece of cheese over an open log fire, rather than eating it raw, and this quintessential Valais delicacy was born The presence of cheese in Valais has been documented since the 4th century BC. Alpine cheese was famous during the Roman period. Later on, it was often used as a means of payment, in lieu of wages to workers or as an export product. Cheese melting has been known in Valais as far back as the year 1574. The term ‘Raclette‘ comes from the local French dialect (racler = to scrape), and it became the official name for this cheese in 1874.To this day, Valais cheese makers follow a recipe which has been passed down for generations, taking raw milk and making into the best and most authentic product which Valais has to offer: Raclette du Valais AOP",Properties:"Composition: Raclette du Valais is a semi-hard cheese from the mountains, made from full-fat untreated cow’s milk. Area of origin: the milk is produced and the cheese is made only in Valais, in a dairy or at a farm on the alpine pastures Flavor: The alpine plants on which the cattle feed give their flavor to the Raclette, so the taste of the cheese varies depending on where the cows graze. A fresh taste (like fresh butter or cream) with a slightly acid tang dominates the floral and fruity notes in Raclette du Valais. In other forms of Raclette to be eaten sliced, a salty, slightly milky flavor with a mildly acid tang dominates the floral and fruity notes" },
{},
{}
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
    console.log(document.body.style,"document.body");
    document.body.style.overflow = 'hidden'; // Prevent scrolling on body

  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIndex(null);
    document.body.style.overflow = 'auto'; // Allow scrolling on body

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
    <Section ref={ref} id="Cheeses">     
     <Modal showModal={showModal} closeModal={closeModal} selectedIndex={selectedIndex} >
       <ImgModal  src={cheeses.length-1 &&cheeses[selectedIndex]?.img} />
  
    {  isSwiss?   <> 
      <h2>{cheeses[selectedIndex]?.title}</h2>
      <h3>HISTORY: </h3>
        <p style={{fontSize:"1.5vh",textAlign:"justify"}}>{cheeses[selectedIndex]?.History}</p>
       <h3>PROPERTIES:</h3>
       <p style={{fontSize:"1.5vh",textAlign:"justify"}}>{cheeses[selectedIndex]?.Properties} </p>
       </>:<><h2>{cheeses[selectedIndex]?.title}</h2><p style={{fontSize:"1.5vh",textAlign:"justify"}}>{cheeses[selectedIndex]?.Properties}</p></>}
  
 

     </Modal>   

      <Title data-scroll data-scroll-speed="-1">
        {isSwiss? "Swiss Cheeses":"Iranina Cheeses"}
      </Title>
      <Left>
        <div>
      {/* <h2 onClick={()=>setIsSwiss(false)}>Iraninan Cheese</h2> */}
      <h2 onClick={()=>setIsSwiss(false)} style={{textAlign:"center",whiteSpace:"noWrap",fontSize:"3.5vw",backgroundColor:`${!isSwiss?"#fff":"#202020"}`,color:`${!isSwiss?"#202020":"#fff"}`,borderRadius:"8px",padding:"0px 4px"}}>Iraninan Cheese</h2>
      <h2 onClick={()=>setIsSwiss(true)} style={{textAlign:"center",fontSize:"3.5vw",marginTop:"16px",backgroundColor:`${isSwiss?"#fff":"#202020"}`,color:`${isSwiss?"#202020":"#fff"}`,borderRadius:"8px",padding:"0px 4px"}}>Swiss cheese</h2>

      </div>
      </Left>
      <Right showModal={showModal} data-scroll ref={Horizontalref}>
    {cheeses.map((cheese,index)=>{
      return <Product img={cheese.img} title={cheese.title} index={cheese.index} openModal={openModal} />
    })}
      </Right>
    </Section>
  );
};

export default Shop;
