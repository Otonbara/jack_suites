import React from 'react'
import BackgroundImage from '../assets/parallax-image.jpg'
import DeluxeSuite1 from '../assets/room-1(0).jpg'
import DeluxeSuite2 from '../assets/room-1(1).jpg'
import ExecuitiveSuite1 from '../assets/room-3(0).jpg'
import ExecuitiveSuite2 from '../assets/room-3(1).jpg'
import ExecuitiveSuite3 from '../assets/room-3(2).jpg'
import PresidentialSuite1 from '../assets/room-2(0).jpg'
import PresidentialSuite2 from '../assets/room-2(1).jpg'
import PresidentialSuite3 from '../assets/room-2(2).jpg'
import StandardSuite1 from '../assets/room-4(0).jpg'
import StandardSuite2 from '../assets/room-4(1).jpg'
import StandardSuite3 from '../assets/room-4(2).jpg'
import PenthouseSuite1 from '../assets/room-5(0).jpg'
import PenthouseSuite2 from '../assets/room-5(1).jpg'
import PenthouseSuite3 from '../assets/room-5(2).jpg'

function Rooms() {
  return (
    <div>
      {/* Hero Section */}
      <div className='hero-section bg-cover bg-center h-56 flex items-center justify-center' style={{backgroundImage: `url(${BackgroundImage})`}}>
        <h1 className='text-white text-4xl font-bold p-4 rounded-lg'>Our Rooms</h1>
      </div>

      {/* Room Categories */}
      <section className='container mx-auto px-4 py=8 bg-gray-100'>
        <h2 className='text-4xl text-center font-bold text-slate-800 mb-8'>Room Categories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Room Category 1 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <img src={DeluxeSuite1} alt="Deluxe Suite" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-bold text-slate-800 mb-2'>Deluxe Suite</h3>
            <p className='text-gray-700 mb-4'>A luxurious room with all the amenities you need for a comfortable stay.</p>
            <button className='bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded'>View Details</button>
          </div>
          {/* Room Category 2 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <img src={PresidentialSuite1} alt="Presidential Suite" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-bold text-slate-800 mb-2'>Presidential Suite</h3>
            <p className='text-gray-700 mb-4'>A spacious suite with luxurious furnishings and top-notch amenities.</p>
            <button className='bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded'>View Details</button>
          </div>
          {/* Room Category 3 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <img src={ExecuitiveSuite1} alt="Execuitive Suite" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-bold text-slate-800 mb-2'>Execuitive Suite</h3>
            <p className='text-gray-700 mb-4'>An elegant suite with a separate living area and premium amenities.</p>
            <button className='bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded'>View Details</button>
          </div>
          {/* Room Category 4 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <img src={StandardSuite1} alt="Standard Suite" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-bold text-slate-800 mb-2'>Standard Suite</h3>
            <p className='text-gray-700 mb-4'>Experience unparalleled comfort in our Standard Suite, 
              thoughtfully designed for relaxation and convenience. Perfect for solo travelers or couples, 
              it features cozy interiors, modern amenities, and a tranquil atmosphere. 
              Enjoy a restful stay without compromising on quality or affordability.</p>
            <button className='bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded'>View Details</button>
          </div>
          {/* Room Category 5 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <img src={PenthouseSuite1} alt="Penthouse Suite" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-bold text-slate-800 mb-2'>Penthouse Suite</h3>
            <p className='text-gray-700 mb-4'>Indulge in the ultimate luxury with our Penthouse Suite, 
              designed for guests who desire elegance and exclusivity. 
              Perched at the top of Jack Suites, it offers breathtaking city views, 
              a spacious living area, premium furnishings, and personalized services. 
              Relax in a serene ambiance with modern amenities that redefine comfort, 
              ensuring an unforgettable stay.</p>
            <button className='bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded'>View Details</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rooms
