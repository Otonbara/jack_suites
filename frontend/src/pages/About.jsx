import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutImage from '../assets/about.jpg'
import ParaImage from '../assets/parallax-image.jpg'

function About() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <h1 className="text-white text-4xl font-bold p-4 rounded-lg">
          About Us
        </h1>
      </div>

      <section className='container mx-auto px-4 bg-gray-100 shadow-lg'>
        <h2 className='text-4xl text-center font-bold text-slate-800'>JACK <span className='text-zinc-500'>SUITES</span></h2>
        <p className='text-lg text-gray-700 text-justify'>
        Jack Suites is a luxury hotel offering a serene and elegant escape in the heart of Lagos, Nigeria. 
        Whether you're traveling for business or leisure, our well-appointed rooms, top-notch services, 
        and warm hospitality make us the perfect choice for a memorable stay.
        </p>
      </section>
      
      {/* Parallax Section */}
      <section
        className='relative w-full h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center'
        style={{ backgroundImage: `url(${ParaImage})` }}>
          {/* Backgound Overlay */}
          <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
              {/* Content */}
              <div className='absolute inset-0 flex items-center justify-center' data-aos="fade-in">
                <div className='text-center text-white px-6'>
                  <h2 className='text-4xl font-bold mb-4 md:text-5xl'>Experience Unmatched Luxury</h2>
                  <p className='text-lg md:text-2xl mb-6'>Your comfort is our priority - Discover world-class hospitality.</p>
                  <Link to="/rooms">
                    <button className='px-6 py-2 bg-zinc-500 font-bold text-black rounded-full hover:bg-zinc-300 hover:text-black transition'>
                      Book Your Stay
                    </button>
                  </Link>
                </div>
              </div>
      </section>
    </div>
  )
}

export default About
