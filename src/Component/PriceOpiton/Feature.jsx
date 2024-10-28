import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Feature({feature}) {
  return (
    <div>
        <div className='flex items-center gap-1'>
        <IoMdCheckmarkCircle />{feature}
        </div>
 
    </div>
  )
}
