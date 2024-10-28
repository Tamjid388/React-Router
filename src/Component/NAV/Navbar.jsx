import React, { useState } from 'react'
import Link from '../Link/Link';
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [open,setOpen]=useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
      ];
      
 
      
  return (
    <nav className='bg-green-200 p-2'>
 <div onClick={()=>setOpen(!open)}>
   { 
        open=== true?<AiOutlineClose className='text-2xl md:hidden' />:
        <IoMenuSharp className='text-2xl md:hidden' />
    }
 
    </div>

<ul className={`md:flex mr-3 duration-1000  absolute md:static
     ${open?'top-10':'-top-60'  }`}>
        {
            routes.map(route=> <Link key={route.id}
            route={route}
            ></Link> 
           )
        }</ul>

    </nav>
  )
}
