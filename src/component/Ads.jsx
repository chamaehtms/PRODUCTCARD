import React from 'react'

function Ads() {
  return (
    <div className='not-ads'>
           <img src="./deals.jpg" alt="ads1"  className=' sm:hidden lg:block w-60  h-50 cursor-pointer deals1-shadow'/>
           <img src="./deals2.jpg" alt="ads2" className='sm:hidden lg:block w-80 h-70 mt-20 cursor-pointer'/>
    </div>
  )
}

export default Ads
