import React from 'react'
import Feature from './feature'

export default function Option({option}) {
   const  {name,price,features} =option
  return (
    <div className='bg-blue-100 rounded-lg p-4  flex flex-col  justify-between space-y-4'>
        <h2>
            <span className='text-3xl font-extrabold'>Price: {price}</span>
            <span  className='text-2xl'>/mon</span>
        </h2>
        <h4 className="text-2xl">{name}</h4>

        {
            features.map(feature=><Feature feature={feature}>

            </Feature>)
        }
        <button className="btn  btn-primary">Buy Now</button>
    </div>
  )
}
