import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import HeroImage1 from '../assets/hero-image-1.jpg';
import HeroImage2 from '../assets/hero-image-2.jpg';
import HeroImage3 from '../assets/hero-image-3.jpg';
import ParaImage from '../assets/parallax-image.jpg'

function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative w-full h-screen'>
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className='w-full h-full'>
          
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className='w-full h-full bg-cover bg-center relative'
              style={{ backgroundImage: `url(${HeroImage1})` }}>
              {/* Backgound Overlay */}
              <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
              {/* Content */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white px-6'>
                  <h1 className='text-4xl font-bold mb-4'>Welcome to Jack Suites</h1>
                  <p className='text-lg md:text-2xl mb-6'>Experience luxury and comfort in our hotel</p>
                  <button className='px-6 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-300 hover:text-black transition'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className='w-full h-full bg-cover bg-center relative'
              style={{ backgroundImage: `url(${HeroImage2})` }}>
              {/* Backgound Overlay */}
              <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
              {/* Content */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white px-6'>
                  <h1 className='text-4xl font-bold mb-4'>Experience True Comfort</h1>
                  <p className='text-lg md:text-2xl mb-6'>Rooms designed for you to feel at home</p>
                  <button className='px-6 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-300 hover:text-black transition'>
                    Explore Rooms
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className='w-full h-full bg-cover bg-center relative'
              style={{ backgroundImage: `url(${HeroImage3})` }}>
              {/* Backgound Overlay */}
              <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
              {/* Content */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white px-6'>
                  <h1 className='text-4xl font-bold mb-4'>Unmatched Luxury Services</h1>
                  <p className='text-lg md:text-2xl mb-6'>Premium services tailored for your comfort</p>
                  <button className='px-6 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-300 hover:text-black transition'>
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Check-In Card Section */}
      <section className='relative -mt-16 z-10'>
        <div className='container mx-auto px-4'>
          <div className='bg-slate-800 shadow-xl shadow-zinc-500 rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4'>
            {/* Check-In Date */}
            <div className='flex flex-col'>
              <label htmlFor='checkin' className='text-white font-semibold mb-2'>
                Check-In Date
              </label>
              <input
                type='date'
                id='checkin'
                className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500'/>
            </div>

            {/* Check-Out Date */}
            <div className='flex flex-col'>
              <label htmlFor='checkout' className='text-white font-semibold mb-2'>
                Check-Out Date
              </label>
              <input
                type='date'
                id='checkout'
                className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500'/>
            </div>

            {/* Number of Guests */}
            <div className='flex flex-col'>
              <label htmlFor='guests' className='text-white font-semibold mb-2'>
                Guests
              </label>
              <select
                id='guests'
                className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500'>
                <option value='1'>1 Guest</option>
                <option value='2'>2 Guests</option>
                <option value='3'>3 Guests</option>
                <option value='4'>4+ Guests</option>
              </select>
            </div>

            {/* Check Availability Button */}
            <div className='flex items-end'>
              <button
                className='w-full bg-zinc-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-zinc-400 hover:text-black transition'>
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className='relative w-full h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center'
        style={{ backgroundImage: `url(${ParaImage})` }}>
          {/* Backgound Overlay */}
          <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
              {/* Content */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white px-6'>
                  <h2 className='text-4xl font-bold mb-4 md:text-5xl'>Experience Unmatched Luxury</h2>
                  <p className='text-lg md:text-2xl mb-6'>Your comfort is our priority - Discover world-class hospitality.</p>
                  <button className='px-6 py-2 bg-zinc-500 font-bold text-black rounded-full hover:bg-zinc-300 hover:text-black transition'>
                    Book Your Stay
                  </button>
                </div>
              </div>
      </section>
    </div>
  )
}

export default Index