import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-white'>
        <p>CONTACT <span className='text-white font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-white'>Our OFFICE</p>
          <p className='text-white'>2-4-152 Old Bus Depot Rd ,Ramnagar<br /> Hanmakonda, Telangana, India</p>
          <p className='text-white'>Tel: +91 6309425973 <br />Email: sumithreddy277@gmail.com</p>
          <p className='font-semibold text-lg text-white'>Health Care Services at LifeLine </p>
          <p className='text-white'>Learn more about our Hospital and its Services.</p>
          <button className='text-white border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore More</button>
        </div>

      </div>

    </div>
  )
}

export default Contact
