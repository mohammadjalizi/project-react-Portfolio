import React from "react";
import img1 from "./team img/team1.jpg";
import img2 from './team img/team2.jpg'
import img3 from './team img/team3.jpg'
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const dat=[

{

avatar:img1,
name:'آمین دو',
revice:  '   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',


},
{

  avatar:img2,
  name:' جان اسمیت',
  revice:  '   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
  
  },
  {

    avatar:img3,
    name:' لیزا مارکو',
    revice:  '   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است', 
    
    },
      



]

function Testminals() {
  return (
      
      <div id="testminial">
        
     
        <h2  className=" text-center  my-10 md:text-2xl " >گروه ما</h2>
        <Swiper className="testminal-container  pb-[0.5rem] md:w-[40%] w-[100%] m-auto"
           spaceBetween={50}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
   >   
    
          {
            dat.map(({avatar,name,revice},index)=>{

  return(
    
    <SwiperSlide key={index} className="  testmminalartic ">
    <div className=" clinet-Avtar   w-[4rem]   aspect-1/1  overflow-hidden">
      <img src={avatar} />
      
    </div>
    <h5>{name}</h5>
      <small>
      {revice}
      </small>
  </SwiperSlide>
    
  )


            })
          }
    

    
        </Swiper>
        </div>
    
    
    );
  }

export default Testminals;
