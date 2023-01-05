import React, { useEffect } from "react";
import img from "../assets/me.jpg";
import { AiFillDiff } from "react-icons/ai";
import Aos, { init } from "aos";
import 'aos/dist/aos.css'

function About() {
   useEffect(()=>{
    Aos.init({duration:2000 })
   })
  return (
    <div data-aos="fade-down-right">
    <div id="about" className="   mt-8 h-[100vh] "  >
      <div className=" text-center  md:mt-24 ">  
      <h5 className=" text-white ">Get to now</h5>
      <h2 className="  text-2xl "> درباره من</h2>
      </div>
      <div className="container  grid grid-cols-1 md:grid-cols-2 px-28  py-10">
        <div className="about me mt-5">
          <div className=" md:w-[100%]  w-[50%]  m-auto abut img bg-blue-300 rounded-2xl">
            <img src={img} />
          </div>
        </div>
        <div className="about-concat ">
          <div className="about-cards  grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2  ">
            <article className=" bg-[#2c2c6c] border-1 border-transparent p-4 rounded-3xl  card  text-center">
            <AiFillDiff  className="  inline-block " />
              <h5>exprens</h5>
              <small>3+years working</small>
            </article>
            <article className=" bg-[#2c2c6c] border-1 border-transparent card  p-4 rounded-3xl text-center">
            <AiFillDiff  className="  inline-block " />
              <h5>exprens</h5>
              <small>3+years working</small>
            </article>
            <article className=" bg-[#2c2c6c] border-1 border-transparent   card p-4 rounded-3xl text-center">
              <AiFillDiff  className="  inline-block " />
              <h5>exprens</h5>
              <small>3+years working</small>
            </article>
          </div>
          <p className="    my-6 text-gray-50   pRgaf     ">
          سلام محمد جلیزی هستم. برنامه نویس فرانت اند وب (Joniur Front End Developer)، به دنیای وب و تکنولوژی علاقه دارم. هر روز و هر لحظه در حال یادگیری هستم و این مسیر ادامه دارد...
          </p>
          <a href="#concat" className="btn btn-praimry ">مطالعه بیشتر + ثبت سفارش</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
