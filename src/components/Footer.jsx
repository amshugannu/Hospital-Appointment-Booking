// Footer.jsx
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-#1f2937 text-white'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt='Logo' />
          <p className='w-full md:w-2/3 leading-6 text-gray-400'>Providing quality healthcare services for a better life.</p>
        </div>
        {/* Middle Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li className='hover:text-gray-200'>Home</li>
            <li className='hover:text-gray-200'>About Us</li>
            <li className='hover:text-gray-200'>Contact Us</li>
            <li className='hover:text-gray-200'>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li>+91-8688493306</li>
            <li>ranjithambeeru21@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className='border-gray-700' />
        <p className='py-5 text-sm text-center text-gray-400'>© 2024 Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
