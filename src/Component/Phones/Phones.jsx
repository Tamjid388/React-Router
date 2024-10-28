import React, { useEffect, useState } from 'react'
import  axios from  "axios"
import { Audio,ThreeCircles } from 'react-loader-spinner'
;

export default function Phones() {
   const [phones,setPhones]= useState([])
   useEffect(()=>{
// fetch
// ('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res=>res.json())
// .then(data=>setPhones(data.data))
axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(data=>{
    const phoneData=data.data.data
}
)
   },[])
  return (
    <>
    <h1 className='text-center my-10 font-extrabold text-4xl text-red-600'>React Awesome Component</h1>
    <div className='flex justify-center space-x-5 my-10'>
        
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
<ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

       
    </div>

    </>
  )
}
