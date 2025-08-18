import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";

function ProductCard({image, name, price, description, onBuy}) {
  return (
    <div className='sm:w-50 md:w-70 h-85 flex justify-center items-center text-center flex-col text-balance bg-gray-200 rounded-xl gap-3 cardhover'>
      <img src={image} alt={name} className='sm:w-15 md:w-30 h-30 rounded-xl object-contain mt-10' />
      <h2 className='text-lg font-semibold text-gray-900'>{name}</h2>
      <p className='text-xl font-bold text-green-700'>{price}</p>
      <p className='leading-snug m-0 p-0 text-xs text-gray-600'>{description}</p>
      <button onClick={onBuy} className='mb-2 w-40 bg-blue-900 text-white py-2 px-2 rounded-lg bt-hover hover:text-gray-600 cursor-pointer  font-semibold flex items-center justify-center gap-2'><HiOutlineShoppingCart />BUY NOW</button>
    </div>
  )
}

export default ProductCard
