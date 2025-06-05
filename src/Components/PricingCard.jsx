import React from 'react'

const PricingCard = ({title, price, features}) => {
  return (
    <div className="bg-white p-6 rounded-2xl border-gray-300 shadow-xl transition duration-300 ease-in-out">
      <h2 className='text-xl font-semibold mb-2 text-center'>{title}</h2>
      <p className='text-3xl font-bold mb-4 text-center'>{price}</p>
      <ul className='space-y-2 mb-6'>
         {features.map((feature, i)=>(
            <li key={i} className='text-gray-700 text-sm text-center'>✔{feature}</li>
         ))}
      </ul> 
      <div className='flex justify-center'>
         <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition'>Choose Plan</button>
      </div>
    </div>
  )
}

export default PricingCard
