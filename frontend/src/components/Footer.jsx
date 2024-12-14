import React from 'react';
import Logo from '../assets/Logo.jpg';

function Footer() {
  return (
    <footer className='bg-slate-800 text-white py-8'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
            {/* Logo */}
            <div className='flex flex-col items-center mb-6 md:mb-0'>
                <img src={Logo} alt="Jack Suites Logo" className='h-16 w-auto mb-2'/>
                <p className='text-center mx-3 md:text-left'>
                    Jack Suites is a luxury hotel offering a serene and elegant escape in the heart of Lagos, Nigeria. Whether you're traveling for business or leisure, our well-appointed rooms, top-notch services, and warm hospitality make us the perfect choice for a memorable stay.
                </p>
            </div>

            {/* Newsletter Signup */}
            <div className='flex flex-col items-center md:items-start'>
                <h3 className='text-lg font-bold mb-2'>Stay Updated</h3>
                <form className='flex'>
                    <input type="email" placeholder='Enter your email' className='px-4 py-2 bg-gray-700 text-white rounded-l-full focus:outline-none'/>
                    <button type='submit' className='px-4 py-2 bg-zinc-500 text-white rounded-r-full hover:bg-zinc-300 transition'>
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Footer Links */}
            <ul className='flex flex-col md:flex-col space-y-2 md:space-x-6 justify-center items-center text-center mt-4 md:mt-0'>
                <li>
                    <a href="#home" className='text-white hover:text-black transition'>Home</a>
                </li>
                <li>
                    <a href="#about" className='text-white hover:text-black transition'>About</a>
                </li>
                <li>
                    <a href="#rooms" className='text-white hover:text-black transition'>Rooms</a>
                </li>
                <li>
                    <a href="#services" className='text-white hover:text-black transition'>Services</a>
                </li>
                <li>
                    <a href="#contact" className='text-white hover:text-black transition'>Contact Us</a>
                </li>
            </ul>

            {/* Map */}
            <div className='w-full h-64 mt-8'>

            </div>
        </div>
    </footer>
  );
}

export default Footer;