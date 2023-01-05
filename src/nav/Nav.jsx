import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";

import { useState } from 'react';


function Nav() {
  const [activeNav,setactiveNav]=useState('#')
  return (
  <nav className=' nav  flex  flex-row-reverse'>
<a href='#home'><AiOutlineHome/></a>
<a href='#about'>  <AiOutlineUser/>  </a>

<a href='#service'>  <AiOutlineFundProjectionScreen/>  </a>
<a href='#footer'>  <AiFillBook/>  </a>


  </nav>
  )
}

export default Nav