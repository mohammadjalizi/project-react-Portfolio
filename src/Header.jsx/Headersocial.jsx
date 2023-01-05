import React, { useEffect } from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Aos, { init } from "aos";
import 'aos/dist/aos.css'

function Headersocial() { 
  useEffect(()=>{
    Aos.init({duration:2000 })
   })
  return (


    <div className=' flex flex-col items-center gap-6 absolute  bottom-0 b-[3rem] left-[20%]  header'  data-aos="fade-up">

<a href=''><AiFillLinkedin/></a>
<a href=''>  <AiFillGithub/>  </a>
<a href=''>  <AiFillGithub/>  </a>
<a href=''></a> 
    </div>
  )
}

export default Headersocial