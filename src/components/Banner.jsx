// Banner.jsx
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='flex bg-gray-900 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20'>
      {/* Left Side */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <h2 className='text-5xl font-semibold text-white'>
          Book an Appointment
        </h2>
        <p className='mt-4 text-gray-400'>Join thousands of satisfied patients.</p>
        <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-blue-600 text-sm sm:text-base text-white px-8 py-3 rounded-full mt-6 hover:bg-blue-700 transition-all'>Create an Account</button>
      </div>
      {/* Right Side */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt='Appointment' />
      </div>
    </div>
  )
}

export default Banner
