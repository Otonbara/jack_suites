import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutImage from '../assets/about.jpg'
import PartnerImage1 from '../assets/airfrance.png'
import PartnerImage2 from '../assets/Wakanow.png'
import PartnerImage3 from '../assets/airbnb.png'
import PartnerImage4 from '../assets/americaairlines.png'
import PartnerImage5 from '../assets/along.png'
import PartnerImage6 from '../assets/hardrockcafe.png'
import PartnerImage7 from '../assets/uber.png'
import PartnerImage8 from '../assets/erickayser.png'
import PartnerImage9 from '../assets/i-fitness.svg'
import ParaImage from '../assets/parallax-image.jpg'
import GridImage1 from '../assets/grid1.jpg'
import GridImage2 from '../assets/grid2.jpg'
import GridImage3 from '../assets/grid3.jpg'
import GridImage4 from '../assets/grid4.jpg'
import GridImage5 from '../assets/grid5.jpg'
import GridImage6 from '../assets/grid6.jpg'

function About() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <div className='bg-gray-100'>
      {/* Hero Section */}
      <div
        className="hero-section bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <h1 className="text-white text-4xl font-bold p-4 rounded-lg">
          About Us
        </h1>
      </div>

      <section className='container mx-auto px-4 bg-gray-100 shadow-lg mt-4'>
        <h2 className='text-4xl text-center font-bold text-slate-800'>JACK <span className='text-zinc-500'>SUITES</span></h2>
        <p className='text-lg text-gray-700 text-justify'>
          Jack Suites is a luxury hotel offering a serene and elegant escape in the heart of Lagos, Nigeria. 
          Whether you're traveling for business or leisure, our well-appointed rooms, top-notch services, 
          and warm hospitality make us the perfect choice for a memorable stay.
          Founded in 2023, we have quickly become a favorite among travelers, hosting over 10,000 guests annually. 
          Our hotel features a variety of attractions including a rooftop pool, a world-class spa, and gourmet dining options. 
          We are dedicated to providing an unforgettable experience for each and every guest.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <div className='container mx-auto px-4 py-8 bg-gray-100 mt-2 flex flex-col md:flex-row justify-between' data-aos="fade-up">
        {/* Mission Section */}
        <section className='md:w-1/2 md:mr-4'>
          <h2 className='text-3xl text-center font-bold text-slate-800'><span className='text-zinc-500'>OUR</span> MISSION</h2>
          <p className='text-lg text-gray-700 text-justify mt-4'>
            At Jack Suites, our mission is to provide exceptional hospitality and create unforgettable moments for our guests.
            We strive to exceed expectations by offering a diverse range of amenities, exceptional service, and a warm atmosphere.
            Whether you're here for business or leisure, we aim to make every stay a memorable one.
          </p>
        </section>

        {/* Vision Section */}
        <section className='md:w-1/2 md:ml-4 mt-8 md:mt-0'>
          <h2 className='text-3xl text-center font-bold text-slate-800'>OUR <span className='text-zinc-500'>VISION</span></h2>
          <p className='text-lg text-gray-700 text-justify mt-4'>
            Our vision is to become the leading luxury hotel in Lagos, Nigeria, known for its exceptional service
            and warm hospitality. We aim to create a unique and memorable experience for each and every
            guest, fostering a sense of comfort and satisfaction. We are committed to providing exceptional
            amenities, exceptional service, and exceptional hospitality to our guests.
          </p>
        </section>
      </div>

      {/* Additional Information Section */}
      <section className='container mx-auto px-4 py-8 bg-gray-100' data-aos="fade-up">
        <h2 className='text-3xl text-center font-bold text-slate-800'>WHY CHOOSE US?</h2>
        <ul className='list-disc list-inside text-lg text-gray-700 mt-4'>
          <li>Prime location in the heart of Lagos</li>
          <li>Luxurious and well-appointed rooms</li>
          <li>Exceptional service and hospitality</li>
          <li>World-class amenities and facilities</li>
          <li>Personalized experiences tailored to your needs</li>
        </ul>
      </section>

      {/* Partners Section */}
      <section className='container mx-auto px-4 py-8 bg-gray-100 mt-2'>
        <h2 className='text-4xl text-center font-bold text-slate-800' data-aos="slide-left">OUR <span className='text-zinc-500'>PARTNERS</span></h2>
        <p className='text-lg text-gray-700 text-justify' data-aos="slide-right">
          We are proud to collaborate with a range of esteemed partners who share our commitment to excellence. 
          Our partners include top travel agencies, renowned culinary experts, and leading wellness brands. 
          Together, we strive to provide our guests with unparalleled experiences and services.
        </p>
        <div className='flex flex-wrap justify-center mt-4'>
        <img src={PartnerImage1} alt='Partner 1' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:-my-2' loading='lazy' /*data-aos="zoom-in"*//>
        <img src={PartnerImage2} alt='Partner 2' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:my-4' loading='lazy' /*data-aos="zoom-out"*//>
        <img src={PartnerImage3} alt='Partner 3' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:-my-2' loading='lazy' /*data-aos="zoom-in"*//>
        <img src={PartnerImage4} alt='Partner 4' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:my-4' loading='lazy' /*data-aos="zoom-out"*//>
        <img src={PartnerImage5} alt='Partner 5' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:-my-2' loading='lazy' /*data-aos="zoom-in"*//>
        <img src={PartnerImage6} alt='Partner 6' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:my-4' loading='lazy' /*data-aos="zoom-out"*//>
        <img src={PartnerImage7} alt='Partner 7' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:-my-2' loading='lazy' /*data-aos="zoom-in"*//>
        <img src={PartnerImage8} alt='Partner 8' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:my-4' loading='lazy' /*data-aos="zoom-out"*//>
        <img src={PartnerImage9} alt='Partner 9' className='h-16 mx-4 my-2 transform transition-transform duration-300 hover:scale-110 hover:-my-2' loading='lazy' /*data-aos="zoom-in"*//>
        </div>
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

      {/* Gallery Section */}
      <section className='container mx-auto px-4 py-8 bg-gray-100'>
        <h2 className='text-3xl text-center font-bold text-slate-800'>GALLERY</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4' data-aos="zoom-out">
          <div className='w-full h-64 bg-cover bg-center' style={{ backgroundImage: `url(${GridImage1})` }}></div>
          <div className='w-full h-64 bg-cover bg-center' style={{ backgroundImage: `url(${GridImage2})` }}></div>
          <div className='w-full h-64 bg-cover bg-center' style={{ backgroundImage: `url(${GridImage3})` }}></div>
          <div className='w-full h-64 bg-cover bg-center' style={{ backgroundImage: `url(${GridImage4})` }}></div>
          <div className='w-full h-64 bg-cover bg-center' style={{ backgroundImage: `url(${GridImage5})` }}></div>
          <div className='w-full h-64 bg-cover bg-center' style={{ backgroundImage: `url(${GridImage6})` }}></div>
        </div>
      </section>
    </div>
  )
}

export default About
