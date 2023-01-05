import React from 'react'
import '../index.css'
import cv from '../assets/cv.pdf'
function Cat () {
  return (
    <div className='  mt-[2.5rem] flex gap-6  justify-center '>

<a href={cv} download  className=' flex justify-center items-center btn-praimry '>رزومه من(CV)</a>
<a href='#contact' className=' btn btn-praimry'>  صحبت کنیم </a>
    </div>
  )
}

export default Cat;