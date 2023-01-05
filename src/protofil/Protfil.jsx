import React from 'react'
 import img1 from '../assets/project1.png'
 import img2 from '../assets/project2.png'
 import img3 from '../assets/project3.png'

 const data=[
 {   
id:1,
image:img1,
 title:'پروژه  تمرینی',
 Paragraf:'این پروژه کلون سایت تمرینی . می باشد. در این پروژه از فریم ورک بوت استرب استفاده شده و از html5 و bootstrap و اندکی js استفاده شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها',
 github:'https://github.com/mohammadjalizi/siteme' ,
 demo:'http://localhost:3002/'
},

{   
  id:2,
  image:img2,
   title:'بروزه نوبیتکس',
   Paragraf:  '      این پروژه با استفاده از فریم ورک تایلویند  استفاده شده واز html5و اندکی js استفاده شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها' ,
   github:'https://github.com/mohammadjalizi/siteme' ,
   demo:'http://https://github.com/mohammadjalizi/siteme:3002/',
  },
  
  {   
    id:1,
    image:img3,
     title:'play',
     Paragraf:'این پروژه کلون سایت  play-tailwind.tailgrids.com می باشد. در این پروژه از فریم ورک   تایلویند استفاده شده و از html5 و اندکی js استفاده شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها',
     github:'https://github.com/mohammadjalizi/siteme' ,
     demo:"https://mohammadjalizi.github.io/play/",
    },
    
      



 ]
function Protfil() {
  return (
    < div className='      mt-[20rem]  md:mt-10  m-16  grid grid-cols-1  md:container1 '>    

   { data.map(({id,image,title,github,demo,Paragraf})=>{

return(


<div id='service' className='    ' >

<div className='  prtiofile-item ' >

  <img className='    rounded-lg ' src={image} title={title}/>
</div>
<h3 className=' my-4    '>{ title}</h3>
<p className='    text-sm leading-relaxed  mb-3 '>{Paragraf}</p>
<div className=' flex  justify-between py-2 '>
  <a className=' btn btn-praimry '  href={github}  target="_blank"> سورس کد</a>
  <a  className=' btn '  href={demo}  target="_blank"> مشاهده آنلاین </a>
  </div>

</div>


  
)


   }) }

    </div>
    
  )
};

export default Protfil