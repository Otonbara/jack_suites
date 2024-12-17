import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { FaBed, FaUsers, FaDollarSign } from 'react-icons/fa'
import HeroImage1 from '../assets/hero-image-1.jpg';
import HeroImage2 from '../assets/hero-image-2.jpg';
import HeroImage3 from '../assets/hero-image-3.jpg';
import ParaImage from '../assets/parallax-image.jpg'
import RoomImage1 from '../assets/room-1(0).jpg'
import RoomImage2 from '../assets/room-2(0).jpg'
import RoomImage3 from '../assets/room-3(0).jpg'
import ServiceImage1 from '../assets/serene.jpg'
import ServiceImage2 from '../assets/dining(0).jpg'
import ServiceImage3 from '../assets/spa(0).jpg'

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
                  <button className='px-6 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-300 hover:text-black transition font-bold'>
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
                  <button className='px-6 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-300 hover:text-black transition font-bold'>
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
                  <button className='px-6 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-300 hover:text-black transition font-bold'>
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
        className='relative w-full h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center -mt-14'
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

      {/* Available Rooms Section */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-4 text-zinc-800'>Our Available Rooms</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

            {/* Room 1 */}
            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={RoomImage1}
                alt="Deluxe Suite"
                className='w-full h-56 object-cover' />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-zinc-800">Deluxe Suite</h3>
                <p className="text-gray-600 mb-4">
                  A spacious room with modern amenities, perfect for relaxation and luxury.
                </p>
                <ul className="mb-4 text-gray-700 border-b">
                  <li className="flex items-center mb-1">
                    <FaBed className="text-zinc-500 mr-2"></FaBed> 1 Queen Bed
                  </li>
                  <li className="flex items-center mb-1">
                    <FaUsers className="text-zinc-500 mr-2"></FaUsers> Accommodates 2 Guests
                  </li>
                  <li className="flex items-center mb-1">
                    <FaDollarSign className="text-zinc-500 mr-2"></FaDollarSign> $200 / night
                  </li>
                </ul>
                <button className='px-4 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-400 transition font-bold'>
                  Book Now
                </button>
              </div>
            </div>

            {/* Room 2 */}
            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={RoomImage2}
                alt="Presidential Suite"
                className='w-full h-56 object-cover' />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-zinc-800">Presidential Suite</h3>
                <p className="text-gray-600 mb-4">
                The pinnacle of luxury with stunning views and premium facilities.
                </p>
                <ul className="mb-4 text-gray-700 border-b">
                  <li className="flex items-center mb-1">
                    <FaBed className="text-zinc-500 mr-2"></FaBed> 1 King Bed + Living Area
                  </li>
                  <li className="flex items-center mb-1">
                    <FaUsers className="text-zinc-500 mr-2"></FaUsers> Accommodates 2-3 Guests
                  </li>
                  <li className="flex items-center mb-1">
                    <FaDollarSign className="text-zinc-500 mr-2"></FaDollarSign> $375 / night
                  </li>
                </ul>
                <button className='px-4 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-400 transition font-bold'>
                  Book Now
                </button>
              </div>
            </div>

            {/* Room 3 */}
            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={RoomImage3}
                alt="Executive Room"
                className='w-full h-56 object-cover' />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-zinc-800">Executive Room</h3>
                <p className="text-gray-600 mb-4">
                An elegant room designed for comfort and productivity during your stay.
                </p>
                <ul className="mb-4 text-gray-700 border-b">
                  <li className="flex items-center mb-1">
                    <FaBed className="text-zinc-500 mr-2"></FaBed> 1 King Bed
                  </li>
                  <li className="flex items-center mb-1">
                    <FaUsers className="text-zinc-500 mr-2"></FaUsers> Accommodates 2 Guests
                  </li>
                  <li className="flex items-center mb-1">
                    <FaDollarSign className="text-zinc-500 mr-2"></FaDollarSign> $230 / night
                  </li>
                </ul>
                <button className='px-4 py-2 bg-zinc-500 text-black rounded-full hover:bg-zinc-400 transition font-bold'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 bg-gray-100'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-zinc-800">Our Services</h2>

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img 
                src={ServiceImage1}
                alt="Luxury Accommodation" 
                className='w-full h-80 object-cover rounded-lg shadow-lg'/>
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 px-6">
              <h3 className="text-2xl font-bold mb-4 text-zinc-700">Luxury Accommodation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enjoy top-class rooms and suites designed with cmfort and elegance.
                Experience premium luxury in a serene environment.
              </p>
              <button className="px-4 py-2 bg-zinc-500 text-black font-bold rounded-full hover:bg-zinc-400 transition">
                Learn More
              </button>
            </div>             
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={ServiceImage2}
                alt="Fine Dining Experience"
                className='w-full h-80 object-cover rounded-lg shadow-lg'/>
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 px-6">
              <h3 className="text-2xl font-bold mb-4 text-zinc-700">Fine Dining Experience</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Savour exquisite cuisines from around the world prepared by our world-class chefs,
                served in luxurious settings.
              </p>
              <button className="px-4 py-2 bg-zinc-500 text-black font-bold rounded-full hover:bg-zinc-400 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={ServiceImage3}
                alt="Spa and Wellness"
                className='w-full h-80 object-cover rounded-lg shadow-lg'/>
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 px-6">
              <h3 className="text-2xl font-bold mb-4 text-zinc-700">Spa and Wellness</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Indulge in our state-of-the-art spa facilities, offering a range of treatments
                to rejuvenate your body and mind.
              </p>
              <button className="px-4 py-2 bg-zinc-500 text-black font-bold rounded-full hover:bg-zinc-400 transition">
                Learn More
              </button>
            </div> 
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-zinc-800">
            What Our Guests Say
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            autoplay={{ delay: 4000 }}
            effect="fade"
            pagination={{ clickable: true }}
            loop={true}
            className="w-full max-w-4xl mx-auto relative"
          >
            {/* Review 1 */}
            <SwiperSlide className="opacity-0 scale-90 transition-transform duration-700 ease-in-out">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-700">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="John Doe"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-zinc-700">John Doe</h4>
                    <div className="flex text-yellow-500 mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "My stay at Jack Suites was absolutely amazing. The rooms were spotless, and the service was top-notch!"
                </p>
                <p className="text-sm text-gray-500">Stayed in Deluxe Suite</p>
              </div>
            </SwiperSlide>

            {/* Review 2 */}
            <SwiperSlide className="opacity-0 scale-90 transition-transform duration-700 ease-in-out">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-700">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="Jane Smith"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-zinc-700">Jane Smith</h4>
                    <div className="flex text-yellow-500 mt-1">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "A fantastic experience! The staff were friendly, and the spa services were out of this world."
                </p>
                <p className="text-sm text-gray-500">Stayed in Executive Suite</p>
              </div>
            </SwiperSlide>

            {/* Review 3 */}
            <SwiperSlide className="opacity-0 scale-90 transition-transform duration-700 ease-in-out">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-700">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="Michael Brown"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-zinc-700">Michael Brown</h4>
                    <div className="flex text-yellow-500 mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "I loved the food and the ambiance. It felt like a home away from home. Highly recommended!"
                </p>
                <p className="text-sm text-gray-500">Stayed in Standard Room</p>
              </div>
            </SwiperSlide>

            {/* Review 4 */}
            <SwiperSlide className="opacity-0 scale-90 transition-transform duration-700 ease-in-out">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-700">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="Sarah Wilson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-zinc-700">Sarah Wilson</h4>
                    <div className="flex text-yellow-500 mt-1">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The views from the rooms are breathtaking, and the luxury exceeded my expectations!"
                </p>
                <p className="text-sm text-gray-500">Stayed in Penthouse Suite</p>
              </div>
            </SwiperSlide>

            {/* Review 5 */}
            <SwiperSlide className="opacity-0 scale-90 transition-transform duration-700 ease-in-out">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-700">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="James Thompson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-zinc-700">James Thompson</h4>
                    <div className="flex text-yellow-500 mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Exceptional service and clean, modern rooms. Perfect for both leisure and business stays."
                </p>
                <p className="text-sm text-gray-500">Stayed in Business Room</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Index