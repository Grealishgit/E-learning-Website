import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
            <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b borde-white/30'>
                <div className='flex flex-col md:items-start items-center w-full'>
                    <img src={assets.logo_dark} alt="logo" />
                    <p className='mt-6 ml-2 text-center md:text-left text-sm text-white/80'>
                        You can describe your business,  platform, <br /> or anything you want to display alongside the logo.
                    </p>
                </div>

                <div className='flex flex-col md:items-start items-center w-full'>
                    <h2 className='font-semibold text-white mb-5'>Company</h2>
                    <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='hidden md:flex flex-col items-start w-full'>
                    <h2 className='font-semibold text-white mb-5'>
                        Subscribe to our newsletter
                    </h2>
                    <p className='text-sm text-white/80'>
                        The latest news, updates, and resources, sent straight to your inbox weekly.
                    </p>
                    <div className='flex items-center gap-2 pt-4'>
                        <input type="email" placeholder="Enter your email address"
                            className="w-full border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none h-9 rounded-md px-2 text-sm" />
                        <button type='submit' className="bg-orange-500 w-34 h-9 rounded-md hover:bg-green-600 text-white font-bold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <p className='py-4 text-xs text-center md:text-sm text-white/60'>
                Copyright 2025 © Hunter-Dev. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer