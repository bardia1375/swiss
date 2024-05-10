import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import img2 from '../assets/Images/handlingMilk.jpeg';
import img1 from '../assets/Images/ingredientMilk.jpeg';
import img3 from '../assets/Images/Curdling.jpeg';
import img4 from '../assets/Images/CurdProcessing.jpeg';
import img5 from '../assets/Images/Pre-curdling.jpeg';
import img6 from '../assets/Images/ShapingPressing.jpeg';
import img7 from '../assets/Images/BrineBath.jpeg';
import img8 from '../assets/Images/Maturation.jpeg';
import img9 from '../assets/Images/Quality.jpeg';
import { useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;
  z-index: 11;
  @media (max-width: 70em) {
  width: 40vw;
  height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;

    height: 80vh;
  }
  @media (max-height: 800px) {
  width: 80vw;

    height: 80vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */
  font-family:IranSans,
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  direction: ${(props) => props.language=="en"?"ltr":"rtl"};
  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 40vw;

  }
  @media (max-width: 30em) {
  width: 60vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family:${(props) => props.language=="en"? "Kaushan Script":"Avini"} ;
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  
  position: absolute;
  top: 1rem;
  z-index: 15;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};


  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  
  h3 {
    font-size:${(props) => props.language=="en"? "3vh":"3vh"} ;
    font-family:${(props) => props.language=="en"? "":"Avini"} ;

  }
p{
  font-family:0.5rem;
  font-family:IranSans;

}
  img {
    width: 100%;
    height: auto;
    z-index: 5;
    border-radius:8px;
  }
`;
const Photos = ({ img, title ,description}) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={title} />
      <h3 style={{whiteSpace:"noWrap"}}>{title}</h3>
      <p style={{fontFamily:"0.5rem",textAlign:"justify"}}>{description}</p>
    </Item>
  );
};

const NewArrival = () => {
   gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);
 const {t,language}=useTranslation()

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
    let t1= gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 8}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=200% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);
  const HowToMake=[
  ,{img:img1 ,title:"1.	The basic ingredient: milk",description:"Cheeses from Switzerland are produced from fresh milk, which is supplied by farmers to the creameries twice a day. The properties of this milk are partly responsible for the final character of the cheese."},
  {img:img2 ,title:"2.	Milk selection and milk handling",description:"Upon delivery, the milk is first tested for its quality and then filtered. Unpasteurised milk is tested rigorously – if no unpasteurised cheese is to be produced, the milk is gently thermised or pasteurised.    "},
  {img:img3 ,title:"3.	Curdling the milk",description:"The milk is poured into the vat and stirred as it is gradually heated. The lactic acid bacteria and rennet are then added to begin the coagulation process. This curdling results in a gelatinous substance."},
  {img:img4 ,title:"4.	Curd processing",description:"Now the cheese harp is introduced: it is used to cut the curd into small pieces. These pieces of curd determine the type of cheese they will become – the smaller the pieces, the harder the final cheese will be."},
  {img:img5 ,title:"5.	Pre-curdling",description:"The curds are stirred and heated up – the harder the cheese is to be, the higher the temperature. Thus, the cheese becomes increasingly solid."},
  {img:img6 ,title:"6.	Shaping and pressing",description:"Once the desired solidity level has been reached, the cheese is poured into a mould. The holes in the base of the mould allow the whey to escape. In addition, the entire cheese is compressed to remove additional liquid."},
  {img:img7 ,title:"7.	Brine bath",description:"The brine bath is the next step: the floating cheese absorbs the salt and releases whey. The rind forms gradually and the flavour of the cheese becomes more intense."},
  {img:img8 ,title:"8.	Maturation and affinage",description:"The cheese undergoes several changes during maturation in the cellar: the rind develops, the inside of the cheese changes colour, holes are formed and the cheese solidifies. An affineur often refines the cheese by rubbing in herbs, cider or white wine."},
  {img:img9,title:"9.	Quality control",description:"The final step sees the cheese undergo various tests. They include inspections of the hole formation, the cheese quality, the taste and the external appearance. Then the cheese is ready to be sold."},


]

const HowToMakeFa=[
  ,{img:img1 ,title:"1. ماده اولیه: شیر",description:"پنیرهای سوئیس از شیر تازه تولید می‌شود که توسط کشاورزان دو بار در روز به انبارها عرضه می‌شود. ویژگی‌های شیرها تا حدی عامل اصلی طعم و مزه‌ی نهایی پنیرها است."},
  {img:img2 ,title:"2. انتخاب شیر و جابجایی شیر",description:"پس از تحویل، ابتدا شیر ازنظر کیفیت آزمایش می‌شود و سپس فیلتر می‌شود. کیفیت شیر و همچنین پاستوریزه بودن یا نبودن، به‌شدت آزمایش می‌شود – و به‌آرامی گرما داده می‌شود."},
  {img:img3 ,title:"3. دلمه زدن شیر",description:"شیر را در قابلمه ریخته و همان‌طور که به‌تدریج گرم می‌شود هم می‌زنند. سپس باکتری‌های اسیدلاکتیک و مایه‌پنیر به آن اضافه می‌شوند تا فرآیند انعقاد آغاز شود. این عمل باعث ایجاد یک ماده ژله‌ای می‌شود."},
  {img:img4 ,title:"4. فرآوری کشک",description:"حالا از الک پنیر، استفاده می‌کنیم؛ وسیله‌ای مخصوص که از آن برای برش کشک به قطعات کوچک استفاده می‌شود. این تکه‌های کشک نوع پنیر را تعیین می‌کنند که هر چه تکه‌های آن کوچک‌تر باشد، پنیر نهایی سخت‌تر می‌شود."},
  {img:img5 ,title:"5. قبل از تشکیل کشک",description:"کشک‌ها را هم زده و گرم می‌کنند، هر چه پنیر سخت‌تر باشد، دما بالاتر می‌رود؛ بنابراین، پنیر به‌طور فزاینده‌ای جامد می‌شود."},
  {img:img6 ,title:"6. شکل دادن و فشار دادن",description:"پس از رسیدن به سطح جامد مطلوب، پنیر را در قالب ریخته می‌شود. سوراخ‌های پایه قالب به آب‌پنیر اجازه خروج می‌دهد. علاوه بر این، کل پنیر فشرده می‌شود تا مایع اضافی خارج شود."},
  {img:img7 ,title:"7. حمام آب‌نمک",description:"حمام آب‌نمک مرحله بعدی است: پنیر شناور نمک را جذب کرده و آب‌پنیر آزاد می‌کند. پوست به‌تدریج تشکیل می‌شود و طعم پنیر شدیدتر می‌شود."},
  {img:img8 ,title:"8. رسیدن و عمل آمدن پنیر",description:"پنیر در طول زمان در انبار دستخوش تغییرات متعددی می‌شود: پوست رشد می‌کند، داخل پنیر تغییر رنگ می‌دهد، سوراخ‌هایی ایجاد می‌شود و پنیر جامد می‌شود."},
  {img:img9,title:"9. کنترل کیفیت",description:"در مرحله آخر، پنیر تحت آزمایش‌های مختلفی قرار می‌گیرد. آن‌ها شامل بازرسی از تشکیل سوراخ، کیفیت پنیر، طعم و ظاهر خارجی هستند. سپس پنیر آماده فروش است."},


]
const [MakeCheese,setMakeCheese]=useState([])
useEffect(()=>{
if(language=="en"){
  setMakeCheese(HowToMake)
}else{
  setMakeCheese(HowToMakeFa)
}
},[language])
  return (
    <Section  ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
       language={language}
        data-scroll-direction="horizontal"
      >
        {t("How Swiss cheese is made")}
      </Title>

      <Container ref={ScrollingRef} language={language}>
      {MakeCheese.map((item)=>(
        <Photos img={item.img} title={item.title} description={item.description}/>

      ))}

      </Container>
{/* 
      <Text data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This collection
        is a great way to find a new look for you. It offers a variety of cool apparel
        styles to fit your taste, while you can also find some cool clothes that you can
        wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men. The
        collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text> */}
    </Section>
  );
};

export default NewArrival;
