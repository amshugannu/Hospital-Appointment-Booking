// TopDoctors.jsx
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-white bg-gray-800'>
      <h1 className='text-3xl font-medium'>Top Doctors</h1>
      <p className='sm:w-1/3 text-center text-gray-400'>Meet our top-rated specialists.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-gray-700 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-gray-900 h-60' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-green-400'>
                <p className='w-2 h-2 bg-green-400 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-white text-lg font-medium'>{item.name}</p>
              <p className='text-gray-400 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-600 text-white px-12 py-3 rounded-full mt-10 hover:bg-blue-700 transition-all'>View More</button>
    </div>
  )
}

export default TopDoctors
