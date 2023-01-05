import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
function Exprens() {
  return (
    <div id='exprens ' className=' h-[60vh]  my-52 '>


<h2 className=' text-center '>مهارت های من</h2>

<div className=' experns  md:container  m-auto   '> 

<div className=' frontend  bg-[#2c2c6c]   w-full  md:mx-[80%]  mt-24 text-center   p-y-[6.4rem] px-[5rem]  hover:bg-transparent  rounded-2xl border border-transparent'>
<h3> front end deloveper</h3> 
<div className=' exprinec-content grid grid-cols-2  text-center mt-9  myskils   gap-y-16 gap-x-2 '>
<article className=' flex '> 
  <BsPatchCheckFill/>
  <div> 
  <h4>HTML5</h4>
  <small>Experirnce</small>
  </div>
     </article>
     <article className=' flex '> 
  <BsPatchCheckFill/>
  <div> 
  <h4>css</h4>
  <small>Experirnce</small>
  </div>
     </article>
     <article className=' flex '> 
  <BsPatchCheckFill/>
  <div className=' '> 
  <h4>javascript</h4>
  <small>Experirnce</small>
  </div>
     </article>
     <article className=' flex '> 
  <BsPatchCheckFill/>
  <div className='  '> 
  <h4>Bootstrap</h4>
  <small>Experirnce</small>
  </div>
     </article>
     
     <article className=' flex '> 
  <BsPatchCheckFill/>
  <div>  
  <h4>tailwind</h4>
  <small>Experirnce</small>
  </div>
     </article>
     <article className=' flex '> 
  <BsPatchCheckFill/>
  <div>  
  <h4>react</h4>
  <small>Experirnce</small>
  </div>
     </article>
</div>

</div>

</div>
    </div>
  )
}

export default Exprens