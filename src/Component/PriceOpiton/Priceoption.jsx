import React from 'react'
import Option from './Option';

export default function Priceoption({option}) {
    const priceOptions = [
        {
          id: 1,
          name: "Basic Plan",
          price: 20,
          currency: "USD",
          duration: "monthly",
          features: [
            "Access to gym equipment",
            "Locker access",
            "1 free personal training session"
          ]
        },
        {
          id: 2,
          name: "Standard Plan",
          price: 45,
          currency: "USD",
          duration: "monthly",
          features: [
            "Access to gym equipment",
            "Locker access",
            "4 personal training sessions",
            "Access to group classes"
          ]
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 70,
          currency: "USD",
          duration: "monthly",
          features: [
            "Access to gym equipment",
            "Locker access",
            "Unlimited personal training sessions",
            "Access to all group classes",
            "Sauna and pool access"
          ]
        },
        {
          id: 4,
          name: "Annual Plan",
          price: 500,
          currency: "USD",
          duration: "yearly",
          features: [
            "Access to gym equipment",
            "Locker access",
            "12 personal training sessions",
            "Access to all group classes",
            "Sauna and pool access",
            "Discount on merchandise"
          ]
        }
      ];
      
     
       
  return (
    <div className='md:m-12 m-3'>
        <h2 className='font-bold text-3xl mb-4'>Best Price In Town</h2>
      <div className="grid  md:grid-cols-3 gap-6">
      {
            priceOptions.map(option=><Option 
            option={option}
            ></Option>)
        }
      </div>
    </div>
  )
}
