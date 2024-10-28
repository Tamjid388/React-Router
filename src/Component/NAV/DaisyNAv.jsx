import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export default function DaisyNavbar() {
  const [open,setOpen]=useState(false)
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'Blog', path: '/blog' }
  ];
  return (
    <div className="">
    
<div onClick={()=>setOpen(!open)}>

{
  open?<AiOutlineClose className='text-2xl md:hidden m-1' />
  :<IoMenuSharp className='text-2xl md:hidden m-1' />
}

</div>


<ul className={`p-2 px-6 rounded-lg md:rounded-none duration-1000 md:flex md:space-x-4
    font-semibold absolute md:static  shadow-2xl bg-gray-100
  ${open?`top-8 left-2`:`top-8 -left-40`}
  `}>
      {
        routes.map(route=><li
        className='list-none md:flex'
        >{route.name}</li>)
      }
   </ul>
    
  </div>
  )
}
