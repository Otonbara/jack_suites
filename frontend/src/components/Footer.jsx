import React from 'react';
import Logo from '../assets/Logo.jpg';

function Footer() {
  return (
    <footer className='bg-slate-800 text-white py-8'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center'>
            {/* Logo */}
            <div className='flex flex-col items-center mb-6 md:mb-0'>
                <img src={Logo} alt="Jack Suites Logo" className='h-16 w-auto mb-2'/>
                <p className='text-center mx-3 md:text-left max-w-80'>
                    Jack Suites is a luxury hotel offering a serene and elegant escape in the heart of Lagos, Nigeria.
                    Whether you're traveling for business or leisure, our well-appointed rooms, top-notch services,
                    and warm hospitality make us the perfect choice for a memorable stay.
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
            <div className='mt-8'>
                <h3 className='text-white text-lg font-bold text-center mb-4'>Quick Links</h3>
                <div className="mt-1 border-t border-gray-700 pt-4">
                    <ul className="flex flex-wrap flex-row justify-center md:justify-start gap-6">
                        {['Home', 'About', 'Rooms', 'Services', 'Contact Us'].map((link) => (
                            <li key={link} className='group relative'>
                                <a 
                                    href={`#${link.toLowerCase().replace(/\s/g, '')}`}
                                    className='text-white transition-colors hover:text-zinc-300'>
                                    {link}
                                </a>
                                <span
                                    className='block absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-500 group-hover:w-full transition-all'>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Map */}
        <div className='mt-8'>
            <iframe
                className='w-full h-64 border-none'
                title='Jack Suites Map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253738.68540177235!2d3.128853586718757!3d6.436803099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad5075e7367%3A0xe15ac0b07db08a37!2sRadisson%20Blu%20Anchorage%20Hotel%2C%20Lagos%2C%20V.I.!5e0!3m2!1sen!2sng!4v1734357509499!5m2!1sen!2sng"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </footer>
  );
}

export default Footer;