import React from 'react'
import { assets } from '../../assets/assets'

const callToAction = () => {
    return (
        <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8md:px-0'>
            <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything!, <span className='text-green-500'>anytime!</span> , anywhere!</h1>
            <p className='text-gray-500 sm:text-sm'>
                Improve your skills and knowledge with our online courses. Learn at your own pace, anytime, anywhere.
            </p>
            <div className='flex items-center font-medium gap-6 mt-4'>
                <button className='px-10 py-3 rounded-md text-white bg-green-500'>Get Started</button>
                <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="arrow" /></button>
            </div>
        </div>
    )
}

export default callToAction