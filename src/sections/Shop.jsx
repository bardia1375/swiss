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
import { useTranslation } from "../context/LanguageContext";
import Fribourg from "../assets/Images/Friburg.jpg"
import Valais from "../assets/Images/Valais.png"
import Jura from "../assets/Images/Jura.png"
import Sbrinz from "../assets/Images/sbrinz.png"
import Gilan from "../assets/Images/Gilan.png"
import Kerman from "../assets/Images/Kerman.jpg"
import Tabriz from "../assets/Images/Tabriz.png"
import Logo from "../assets/Images/Swiss.png";
import IstgahLogo from "../assets/Images/Istgah.png";


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
  font-family:${(props) => props.language=="en"? "Kaushan Script":"Avini"} ;
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
  width: 28%;
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
  padding-left:12vh;

background-color: ${(props) => props.theme.grey};
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const ImgModal=styled.img`
/* border-radius:24px; */
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;

overflow:hidden;
height:40vh;
width:100%;
    @media (max-width: 48em) {
      /* height:100%; */
      width:200px;
      height:200px
  }
`

const ImgModal2=styled.img`
/* border-radius:24px; */
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;

overflow:hidden;
height:40vh;
width:100%;
    @media (max-width: 48em) {
      /* height:100%; */
      width:200px;
      height:200px
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
    font-family:${(props) => props.language=="en"? "":"Avini"} ;

  }
p{
  font-family:${(props) => props.language=="en"? "":"IRANSans"} ;

}
  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ cheese,img, title = "",index,openModal }) => {
  const {t,language}=useTranslation()
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
      language={language}

    >
      <img width="400" height="550" src={img} alt={title} onClick={()=>console.log("index",index)}/>
      <h1 >{title}</h1>
      <p>{title&&t("Click for more information")}</p>
  { cheese?.Link1 &&     <a onClick={(event)=>event.stopPropagation()} href={`${cheese?.Link1}`} style={{fontSize:"0.7rem",marginTop:"8px"}} target="_blank">{t("First Cheese Website Link")}</a>}
  { cheese?.Link2 &&   <a onClick={(event)=>event.stopPropagation()} href={`${cheese?.Link2}`} style={{fontSize:"0.7rem",marginTop:"4px"}} target="_blank">{t("Second Cheese Website Link")}</a>}

    </Item>
  );
};

const Shop = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const {t,language}=useTranslation()

 const IranianCheeses= [
  { img: img5,MapImg:Gilan, title: 'Black cheese', index: 0 ,History:"",Properties:"Then there’s Black cheese, a traditional specialty from Siahmezgi, a historical village in Shaft city, Gilan province. Known throughout Iran for its rich resources and abundant vegetation, Siahmezgi is also famous for its black cheese, a lasting art among the people of this region for centuries. The salty and sour taste of Black cheese harmonizes perfectly with the scent of Gilan’s beautiful nature."},

  { img: img6,MapImg:Tabriz, title: 'Liqvan cheese', index: 1 ,History:"",Properties:"Consider Liqvan cheese, born on the verdant slopes of Arsbaran, where mountains kiss the sky and clear springs gush from the rocks. The village of Liqvan, nestled amidst this beauty, is renowned for its cheese, crafted from the fresh milk of sheep grazing in lush meadows and drinking from Sahand springs.The tale of an old man, a master cheese maker from Liqvan, is etched in countless travelogues, including Naser Khosro’s. His calloused hands, carrying the wisdom passed down from his ancestors, crafted cheeses of unparalleled taste and aroma. A traveler from Farang, drawn by the fame of Liqvan cheese, sought the secret of its unique taste from the old man. The old man spoke of Liqvan cheese as not merely food, but the fruit of love and generations of effort. Every drop of milk was a chapter from the history of the land, every mold of cheese a testament to their culture and tradition. The traveler, after tasting the cheese, was so captivated that he bought all the cheese the old man had, paying with his silver coins.Liqvan cheese, with its uniform texture and irregular holes, demands careful cutting to prevent the mold from breaking. Its strong salty taste is a testament to the variety of animal feed, the cut, and the heat, which contribute to the diversity of cheese flavors across Iran."},
  { img: img8,MapImg:Kerman, title: 'Coloé cheese', index:2,History:"",Properties:"Finally, consider Parisi or Coloé cheese from Kerman province, known as “small Iran” for its ethnic diversity. Skin cheese, made in the middle skin to increase its shelf life, is popular in this province. The local cheeses of Kerman, mostly processed in Sirjan, carry a special aroma and flavor, distinct from all the cheeses in other parts of Iran. Parisi cheese, usually eaten with cumin, a symbolic product of Kerman province, is an important part of the tradition and table of Kerman people."},
];
const SwissCheeses= [
  { img: img4,MapImg:Valais, title: 'Raclette', index: 0,History:"According to legend, Léon was the name of the Valais wine-grower who invented Raclette cheese. On a cold day, he warmed up a piece of cheese over an open log fire, rather than eating it raw, and this quintessential Valais delicacy was born The presence of cheese in Valais has been documented since the 4th century BC. Alpine cheese was famous during the Roman period. Later on, it was often used as a means of payment, in lieu of wages to workers or as an export product. Cheese melting has been known in Valais as far back as the year 1574. The term ‘Raclette‘ comes from the local French dialect (racler = to scrape), and it became the official name for this cheese in 1874.To this day, Valais cheese makers follow a recipe which has been passed down for generations, taking raw milk and making into the best and most authentic product which Valais has to offer: Raclette du Valais AOP",Properties:"Composition: Raclette du Valais is a semi-hard cheese from the mountains, made from full-fat untreated cow’s milk.", Area:" the milk is produced and the cheese is made only in Valais, in a dairy or at a farm on the alpine pastures", Flavor:" The alpine plants on which the cattle feed give their flavor to the Raclette, so the taste of the cheese varies depending on where the cows graze. A fresh taste (like fresh butter or cream) with a slightly acid tang dominates the floral and fruity notes in Raclette du Valais. In other forms of Raclette to be eaten sliced, a salty, slightly milky flavor with a mildly acid tang dominates the floral and fruity notes",Link1:"https://www.valais.ch/en/taste/valais-specialties/raclette",Link2:"https://www.raclette-du-valais.ch/fr-ch" },

{ img: img3,MapImg:Sbrinz, title: 'Sbrinz', index: 1,History:"The roots of Sbrinz AOP go far back to the 16th century, when cheese was gathered in Brienz for transport to Italy by mule. One of these was the cheese that would later become known as Sbrinz based on the Italian name “lo sbrinzo”. In the late Middle Ages, the extra-hard cheese “Sbrinz” was an export hit from Central Switzerland on northern Italian markets. Not least thanks to this cheese, the mule trail across the Grimsel and Gries passes developed into a well-established trade route between Switzerland and Italy – the Sbrinz route. Transport routes may have changed, but the cheese is still made in traditional fashion. Nowadays, the controlled origin from approximately 30 selected valley and mountain cheese dairies in the heart of Central Switzerland, the purely natural cheese production and the fresh raw milk from cows that eat only hay and grass, guarantee the consistently high quality.",Properties:"Composition: extra-hard cheese made from raw milk. After the extensive salt bath, the loaves cure at least 22 months to fully develop their distinctive flavour. ",Area :" Central Swiss cantons of Obwalden, Nidwalden, Lucerne and Zug. Nowadays, it is made in 22 selected valley and alpine cheese dairies in Central Switzerland." ,Flavor:" Robust and spicy aroma, with fine salt crystals, fruity roasted flavors accompanied by a milky note" },
{ img: img2,MapImg:Jura, title: 'Tête de moine', index: 2,History:"Tête de Moine as a proper term has been used since about 1790, but the cheese has a much longer history.The monastery of Bellelay, located in the Jura region in Switzerland, was established in 1136 and confirmed by Pope Innocent II six years later. As early as 1192, or one century before the beginnings of the Swiss Confederation, the monks of the monastery Bellelay were first mentioned in connection with cheese. At that time they paid the annual rent on various properties with cheese made in their abbey. Time and again documents from subsequent centuries mention the use of the valuable cheese as a means of payment.",
Properties:"Composition: Tete de moine is a full-fat, semi-hard cheese made from raw milk. Tête de Moine is not usually sliced, but shaved with a device called Girolle to obtain rosettes", Area:" Canton of Jura and Bernese Jura, North-East of Switzerland", Flavor:"pure and aromatic aroma, more pronounced as it matures. Usually, it has a faint smell of rind and mushrooms. Tête de moine tastes of acidified milk, usually with a faint taste of rind and hay. Moderately salty and slightly tangy",Link1:"https://www.tetedemoine.ch/en/infos/specifications" },

{ img: img1,MapImg:Fribourg, title: 'Gruyère', index: 3 ,History:"The region of Gruyère, in the canton of Fribourg, in the Center of Switzerland, has been known for its cheese production since the 12th century. Medieval chronicles mention the expertise of its inhabitants, who turned the milk production of their herds into full fat cheese. This product was even sold in France and Italy. The official recognition of the name “Gruyère” only happened in the 17th century, which also marked the first measures for the protection of the cheese’s origin through marking.However, it was only in 2001 that Gruyère cheese was granted Controlled Designation of Origni (AOC) at the national level. In 2011, it received the Protected Designation of Origin (AOP) for all of Europe."
  ,
  Properties:"Composition: Gruyère is a hard cheese made from unpasteurized milk", Area:" the region of Gruyère, in the canton of Fribourg, Switzerland. The Gruyère is also produced in Fribourg, Vaud, Neuchâtel and some communes of the canton of Bern.",Flavor:" There are several types of Gruyère, depending on the duration of the maturation. The Gruyère “Réserve” is matured for more than 10 months, giving it a more intense flavour. Full-boded and fruity, it has a firm and slightly crumbly texture.",Link1:"https://www.gruyere.com/en/le-gruyere-aop/our-types-of-le-gruyere-aop",Link2:"https://www.gruyere.com/en/home" },
 ,
  {},{},{},{}
];

const IranianCheesesFa= [
  { img: img5,MapImg:Gilan, title: 'پنیر سیاهمزگی', index: 0 ,History:"",Properties:"سیاهمزگی نام روستایی در شهرستان شفت در استان گیلان است؛ روستایی تاریخی و کهن که نام لغوی آن معبد سیاه میباشد. این روستا از دیرباز مهد افرادی سرشناس و اثرگذار بوده و همواره بیشترین تحصیلکردگان را داشته است؛ سیاهمزگی در میان تمام ایران شناختهشده است؛ منابع غنی و پوششهای گیاهی زیبا و انبوه آن تصویری رؤیایی را در منظر مسافران و ساکنین خود میاندازد. اما آنچه سیاهمزگی را نامی آشنا در گوش ایرانیان میکند پنیر سنتی و خاصش است که پردازش و فرآوری آن قرنهاست در میان مردم این ناحیه تبدیل به یک هنر ماندگار شده است. پنیر سیاهمزگی طعمی شور و ترش دارد؛ اگر طبیعت زیبای استان گیلان را دیده باشید هارمونی متناسبی بین طعم این پنیر و رنگ بوی این طبیعت خواهید یافت. در میان تمام مغازههای سرتاسر گیلان، پنیر سیاهمزگی دیده میشود و سوغات این استان است. "},

  { img: img6,MapImg:Tabriz, title: 'پنیر لیقوان', index: 1 ,History:"",Properties:"در دامنه های سرسبز و خرم ارسباران، جایی که کوه ها به آسمان میرسند و چشمه های زلال از دلسنگ ها جوش میخورند، روستایی قدیمی به نام لیقوان قرار دارد. این روستا به خاطر پنیر معروفش شهرت دارد، پنیری که با شیر تازه گوسفندانی که در مراتع انبوه و پرگل چرا میکنند و از آب چشمهساران سهند مینوشند، تهیه میشود.  درمیان سفرنامه های بیشماری مثل سفرنامهی ناصرخسرو داستان پیرمردی آورده شده که در این روستا زندگی میکرد و از بهترینِ پنیرسازان منطقه بود. او با دستان پینه بسته و تجربه ای که از پدرانش به ارث برده بود، پنیرهایی میساخت که طعم و عطرشان زبانزد خاص و عام بود. مسافری از فرنگ، پس از شنیدن شهرت پنیر لیقوان، به روستا آمد تا از راز این طعم بینظیر پرده بردارد. به سراغ پیرمرد آمد. در این رساله صحبتهای پیرمرد دربارهی پنیر اینطور آورده شده است: \"پنیر لیقوان فقط یک خوراکی نیست، بلکه حاصل عشق و تلاش نسلهاست. ما با شیر گوسفندانی که در این مراتع سرسبز چرا میکنند، پنیر میسازیم. هر قطره شیر حکایتی از تاریخ این سرزمین و هر قالب پنیر، داستانی از فرهنگ و سنت ماست. برای ساخت پنیر لیقوان، باید صبر و حوصله داشت. از نرم کردن شیر با دستهای خود، تا افزودن مایه پنیر و نمک، همه و همه باید با دقت و عشق انجام شود.\"ناصرخسرو آورده است که مسافر پس از مزه کردن پنیر، به قدری شیفته ی پنیر شد که تمام آنچه نزد پیرمرد بود را با سکه های نقره ی خود خریداری کرد. این پنیر با حفرههای مرتب اما نامنظم، بافتی یکپارچه دارد؛ دربرش آن باید دقت زیادی داشت تا قالب آن ازهمگسیخته نشود؛ طعمی شور و قوی دارد. شیوه ی پنیرسازی در بخش های مختلف ایران به همین شکل است اما تنوع خوراک دامها و برش و میزان حرارت آن باعث تنوع مزه های پنیرهاست. "},
  { img: img8,MapImg:Kerman, title: 'پنیر پاریز یا کلویی', index:2 ,History:"",Properties:"استان کرمان، همواره ازلحاظ تنوع قومیتها به ایران کوچک شهره است؛ حضور اقوام مختلف در این استان تنوعی متکثر را به ارمغان آورده است. پنیر پوستی در این استان رواج دارد. این نوع پنیر در میانپوست درست میشود و این سنت به این دلیل در این استان رواج دارد، تا ماندگاری پنیرها بالا برود. پنیرهای محلی کرمان بیشتر در توابع سیرجان فرآوری میشود. طبیعت غنی سیرجان دارای پوشش گیاهی متنوعی است؛ ارتفاعات سیرجان محلی مناسب برای چرای دامهاست و پنیر پوستی محلی، عطر و بویی ویژه دارد که با تمامی پنیرهای قسمتهای ایران متفاوت است. پنیر پاریزی را معمولاً با زیره، محصول نمادین استان کرمان میل میکنند. این پنیر بخش مهمی از سنت و سفرهی مردمان کرمان است. "},
];
const SwissCheesesFa= [
  { img: img1,MapImg:Fribourg, title: 'Gruyère', index: 0 ,History:"منطقه Gruyère، در کانتون فرایبورگ، در مرکز سوئیس، به دلیل تولید پنیر انبوه از قرن دوازدهم به پنیرهایش شهره شد. تواریخ قرون‌وسطی به تخصص ساکنان آن در تولید پنیر اشاره‌های زیادی می‌کنند. آن‌ها بخش عمده‌ای از شیر گله‌های خود را به پنیر پرچرب تبدیل می‌کردند. این محصول حتی در فرانسه و ایتالیا نیز به فروش می‌رسید. به رسمیت شناختن رسمی نام «گرویر» در قرن هفدهم اتفاق افتاد که جزوی از اولین اقدامات برای محافظت از منشأ پنیر از طریق نام‌گذاری و ثبت رسمی آن بود.بااین‌حال، در سال 2001 بود که به پنیر Gruyère در سطح ملی نماد کنترل‌شده Origni (AOC) اعطا شد. در سال 2011، عنوان حفاظت‌شده مبدأ (AOP) را در تمام اروپا دریافت کرد و به یک پنیر محبوب در کل اروپا تبدیل شد.",Flavor:" انواع مختلفی از گرویر بسته به مدت‌زمان فرآوری آن وجود دارد. «گرویر رزرو» بیش از 10 ماه زمان فرآوری آن طی می‌شود و طعم شدیدتری به آن می‌بخشد؛ بافتی سفت و کمی شکننده دارد."
  ,
  Properties:"گرویر پنیر سختی است که از شیر غیرپاستوریزه تهیه می‌شود." ,
  Area:" منطقه گرویر و همچنین در سرتاسر فرایبورگ شامل وود، نوشاتل و برخی از نقاط کانتون برن تولید می‌شود." ,
  Link1:"https://www.gruyere.com/en/le-gruyere-aop/our-types-of-le-gruyere-aop",Link2:"https://www.gruyere.com/en/home"
},
  { img: img2,MapImg:Fribourg, title: 'Tête de moine', index: 1,History:"اسم Tête de Moine تت د مون از حدود سال 1790 استفاده شد، اما خود پنیر تاریخچه بسیار طولانی‌تری دارد؛ صومعه بلی‌لِی Bellelay، واقع در منطقه جورا Jura در سوئیس، در سال 1136 تأسیس شد و شش سال بعد توسط پاپ اینوسنت دوم تأیید شد. در اوایل سال 1192، دقیقاً یک قرن قبل از آغاز کنفدراسیون سوئیس، راهبان صومعه Bellelay برای اولین بار نامی از این نوع پنیر ذکر کردند و آن را خودشان درست می‌کردند. حتی اجاره سالانه املاک مختلف را با پنیر ساخته‌شده در صومعه خود پرداخت می‌کردند. بارها و بارها در اسناد قرن‌های بعد به استفاده از پنیر ارزشمند به‌عنوان وسیله پرداخت ذکر شده است.",
  Properties:"Tete de Moine یک پنیر پرچرب و نیمه سخت است که از شیر خام تهیه می‌شود. Tête de Moine را معمولاً برش نمی‌دهند، بلکه با وسیله‌ای به نام جیرول (Girolle) تراش می‌دهند تا به شکل گل رز ایجاد شود.",Flavor:" رایحه خالص و معطر که با بیشتر شدن زمان فرآوری بیشتر مشخص می‌شود. معمولاً تنی از بوی قارچ در خود دارد. تت د مون طعم شیر اسیدی شده را می‌دهد، با عطر و بوی ضعیف پوست و یونجه. نسبتاً شور است و کمی تند." ,
  Area:"  استان جورا، شمال شرقی سوئیس",
  Link1:"https://www.tetedemoine.ch/en/infos/specifications" },
  { img: img3,MapImg:Fribourg, title: 'Sbrinz', index: 2,History:"ریشه Sbrinz AOP (سبرینز) به قرن شانزدهم بازمی‌گردد، زمانی که پنیر در برینز جمع‌آوری می‌شد تا توسط اسب یا قاطر به ایتالیا منتقل شود. یکی از این پنیرها بر اساس نام ایتالیایی lo sbrinzo به Sbrinz معروف شد. در اواخر قرون‌وسطی، پنیر فوق سخت Sbrinz یک محصول صادراتی از سوئیس مرکزی در بازارهای شمال ایتالیا بود. به لطف این پنیر، مسیر قاطر در سراسر گذرگاه‌های گریمسل و گریس به یک مسیر تجاری مناسب بین سوئیس و ایتالیا تبدیل شد که نامش مسیر Sbrinz نام‌گذاری شد. مسیرهای حمل‌ونقل ممکن است تغییر کرده باشند و پیشرفت کرده باشند اما پنیر هنوز به روش سنتی ساخته می‌شود. امروزه منشأ کنترل‌شده از حدود 30 کارخانه لبنیاتی منتخب پنیر دره‌ای و کوهی است در قلب سوئیس مرکزی، تولید پنیر کاملاً طبیعی و شیر خام تازه از گاوهایی که فقط یونجه و علف می‌خورند، کیفیت بالا را تضمین می‌کند.",Properties:" پنیر بسیار سخت که از شیر خام تهیه‌شده است. پس از حمام نمک فراوان، قالب‌ها حداقل 22 ماه پخته می‌شوند تا طعم متمایز خود را به‌طور کامل ایجاد کنند.",
Flavor:" رایحه‌ای قوی و تند، با کریستال‌های ریز نمک، طعم‌های برشته شده میوه‌ای همراه با نت شیری.",Area:"  کانتون‌های مرکزی سوئیس مانند اُبوالدن، نیدوالدن و زوگ مبدأ این پنیر است." },
  { img: img4,MapImg:Fribourg, title: 'Raclette', index: 3,History:"طبق افسانه، لئون نام تولیدکننده‌ی نوشیدنی در والیس (Valais) بود که پنیر راکلت را پدید آورد. در یک روز سرد، او یک‌تکه پنیر را به‌جای خام خوردن، روی آتش چوبی گرم کرد و این غذای اصلی و قدیمی استان والیس متولد شد.وجود پنیر در Valais از قرن چهارم قبل از میلاد ثبت شده است. پنیر این مناطق (مناطق آلپاین) در دوره روم معروف بود. بعدها، اغلب به‌عنوان وسیله پرداخت، به‌جای دستمزد کارگران استفاده می‌شد. ذوب پنیر از سال 1574 در والیس شناخته شده است. اصطلاح «راکلت» از گویش محلی فرانسوی (راکلر = خراشیدن) می‌آید و در سال 1874 نام رسمی این پنیر شد.تا به امروز، سازندگان پنیر والیسی از دستورالعملی پیروی می‌کنند که برای نسل‌ها منتقل‌شده است، شیر خام را می‌گیرند و به بهترین و معتبرترین محصولی که استان والیس ارائه می‌دهد تبدیل می‌کنند: (راکلت والیسی) Raclette du Valais AOP.",Properties:"Raclette du Valais یک پنیر نیمه سخت کوهستانی است که از شیر پرچرب گاو تصفیه نشده تهیه می‌شود." ,Flavor:"گیاهان آلپی که گاوها از آن‌ها تغذیه می‌کنند طعم خود را به راکلت می‌دهند، بنابراین طعم پنیر بسته به محل چرای گاوها متفاوت است. طعم تازه (مثل کره تازه یا خامه) با طعم کمی اسیدی بر نت‌های گلی و میوه‌ای در Raclette du Valais غالب است. در سایر اشکال راکلت که باید به‌صورت برش‌خورده، میل شود، طعمی شور و کمی شیری با رنگ اسیدی ملایم بر نت‌های گلی و میوه‌ای غالب است.", Area:" شیر تولید می‌شود و پنیر فقط در استان والیس، در یک لبنیات یا در مزرعه‌ای در مراتع کوهستانی تهیه می‌شود."
  ,Link1:"https://www.valais.ch/en/taste/valais-specialties/raclette",Link2:"https://www.raclette-du-valais.ch/fr-ch" },
{},
{}
];
const [cheeses,setCheeses]=useState(SwissCheeses)
const [isSwiss,setIsSwiss]=useState(true)
useEffect(()=>{
  if(language=="en"){
     if(isSwiss){
    setCheeses(SwissCheeses)

  }else{
    setCheeses(IranianCheeses)

  }
  }else{
    if(isSwiss){
      setCheeses(SwissCheesesFa)
  
    }else{
      setCheeses(IranianCheesesFa)
  
    }
  }
 
},[isSwiss,language])



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
       <div style={{display:"flex",alignItems:"center"}}>
       <ImgModal  src={cheeses.length-1 &&cheeses[selectedIndex]?.img} style={{marginRight:"-10px",borderBottomLeftRaduis:"32px",borderTopLeftRaduis:"32px"}}/>
       <ImgModal2  src={cheeses.length-1 &&cheeses[selectedIndex]?.MapImg} style={{marginRight:"-5px",borderBottomRightRaduis:"32px",borderTopRightRaduis:"32px"}}/>
      </div>
    {  isSwiss?   <> 
      <h2>{cheeses[selectedIndex]?.title}</h2>
      <h3>{t("HISTORY")}:</h3>
        <p style={{fontSize:"1.5vh",textAlign:"justify"}}>{cheeses[selectedIndex]?.History}</p>
       <h3>{t("PROPERTIES")}:</h3>
       <p style={{fontSize:"1.5vh",textAlign:"justify"}}><span style={{fontWeight:"bold"}}>{t("Composition")}: </span>{cheeses[selectedIndex]?.Properties} </p>
       <p style={{fontSize:"1.5vh",textAlign:"justify"}}><span style={{fontWeight:"bold"}}>{t("Flavor")}:</span>{cheeses[selectedIndex]?.Flavor} </p>
       <p style={{fontSize:"1.5vh",textAlign:"justify"}}><span style={{fontWeight:"bold"}}>{t("Area")}:</span>{cheeses[selectedIndex]?.Area} </p>

       </>:<><h2>{cheeses[selectedIndex]?.title}</h2><p style={{fontSize:"1.5vh",textAlign:"justify"}}>{cheeses[selectedIndex]?.Properties}</p></>}
  


     </Modal>   

      <Title data-scroll data-scroll-speed="-1" language={language}>
        {isSwiss? t("Swiss Cheese"):t("Iranian Cheese")}
      </Title>
      <Left>
        <div>
      <h2 onClick={()=>setIsSwiss(false)} style={{textAlign:"center",whiteSpace:"noWrap",fontSize:`${language=="en"? "3.5vw":"6vw"}`,backgroundColor:`${!isSwiss?"#fff":"#202020"}`,color:`${!isSwiss?"#202020":"#fff"}`,borderRadius:"8px",padding:"0px 4px",fontFamily:`${language=="en"? "Kaushan Script":"Avini"}` 
}}>{t("Iranian Cheese")}</h2>
      <h2 onClick={()=>setIsSwiss(true)} style={{textAlign:"center",fontSize:`${language=="en"? "3.5vw":"6vw"}`,marginTop:"16px",backgroundColor:`${isSwiss?"#fff":"#202020"}`,color:`${isSwiss?"#202020":"#fff"}`,borderRadius:"8px",padding:"0px 4px",fontFamily:`${language=="en"? "Kaushan Script":"Avini"}`}}>{t("Swiss Cheese")}</h2>

      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",bottom:"16px"}}>
      <img
          width="500"
          height="500"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"60px",height:"60px"}}
        />
        
         <img
          width="500"
          height="500"
          src={IstgahLogo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          style={{width:"70px",height:"70px",marginLeft:"-12px"}}
        />
      </div>
      
      </Left>
      <Right showModal={!!showModal} data-scroll ref={Horizontalref} style={{paddingRight:`${showModal?"3000px" : "200px"}`}}>
    {cheeses.map((cheese,index)=>{
      return <Product  cheese={cheese} img={cheese.img} title={cheese.title} index={cheese.index} openModal={openModal} />
    })}
      </Right>
    </Section>
  );
};

export default Shop;
