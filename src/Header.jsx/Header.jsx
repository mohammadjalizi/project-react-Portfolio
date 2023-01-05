import React, { useEffect } from 'react'
import Cat from './Cta'
import Me from '../assets/me.jpg'
import Headersocial from './Headersocial'
import Aos, { init } from "aos";
import 'aos/dist/aos.css'
function Header() {
  useEffect(()=>{

Aos.init(({duration:2000 }))

  })
  return (
    <div id='home' data-aos="fade-down" className='  h-[100vh] pt-[7rem] overflow-hidden  relative text-center  '>

<h5> سلام اسم من  </h5>
<h1>محمد جلیزی</h1>
<h5 className=' text-light'> فرانت اند </h5>
<Cat/>
<Headersocial/>
<div className=' me'>
<img src={Me}/>
   
</div>
< a href='#concat' className=' scroll-dowm  mr-[103px   ] absolute  right-[-2.3rem] bottom-[5rem]  transform rotate-90 f text-[0.9rem] '>scroll Down</a>
    </div>
  )
}

export default Header