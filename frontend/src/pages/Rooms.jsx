import React, { useState } from 'react'
import Modal from 'react-modal'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
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

Modal.setAppElement('#root')

function Rooms() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null)

  const openModal = (room) => {
    setSelectedRoom(room)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setSelectedRoom(null)
    setModalIsOpen(false)
  }

  const rooms = [
    {
      id: 1,
      name: 'Standard Suite',
      description: 'A cozy room with all the essentials for a relaxing stay.',
      detailed_description: 'Standard Rooms with marble floors and a great view of the City with smoking or non – smoking rooms available.',
      images: [StandardSuite1, StandardSuite2, StandardSuite3],
      price: '$150 per night',
      capacity: '2-4 people',
      amenities: ['Wi-Fi', 'Air conditioning', 'TV', 'Mini-bar', 'Safe']
    },
    {
      id: 2,
      name: 'Deluxe Suite',
      description: 'A luxurious room with all the amenities you need for a comfortable stay.',
      detailed_description: 'Deluxe suite with marble floors and a great view of the Atlantic with smoking or non – smoking rooms available.',
      images: [DeluxeSuite1, DeluxeSuite2],
      price: '$200 per night',
      capacity: '2-4 people',
      amenities: ['Wi-Fi', 'Air conditioning', 'TV', 'Mini-bar', 'Safe']
    },
    {
      id: 3,
      name: 'Executive Suite',
      description: 'A stylish room with a comfortable layout and all the amenities you need.',
      detailed_description: 'Our Execuitive Suites are standard rooms with extra space for your comfort. They have separate living rooms that are ideal for meetings.',
      images: [ExecuitiveSuite1, ExecuitiveSuite2, ExecuitiveSuite3],
      price: '$300 per night',
      capacity: '2-4 people',
      amenities: ['Wi-Fi', 'Air conditioning', 'TV', 'Mini-bar', 'Safe', 'Work desk']
    },
    {
      id: 4,
      name: 'Presidential Suite',
      description: 'A spacious suite with luxurious furnishings and top-notch amenities.',
      detailed_description: 'The Presidential Suites are stately with ostentatious designs and breath-taking views of the Atlantic. The suite has a DVD Player, Hi Definition LED TVs, and a separate lounge, bar and dining area for guests. It has an adjoining standard room that makes it perfect for a large family.',
      images: [PresidentialSuite1, PresidentialSuite2, PresidentialSuite3],
      price: '$500 per night',
      capacity: '4-6 people',
      amenities: ['Wi-Fi', 'Air conditioning', 'TV', 'Mini-bar', 'Safe', 'Jacuzzi', 'Spa']
    },
    {
      id: 5,
      name: 'Penthouse Suite',
      description: 'A luxurious penthouse with stunning views and top-notch amenities.',
      detailed_description: 'The most extraordinary suite in Lagos especially because of its magnificent views of the beautiful city of Lagos and the Atlantic Ocean. It has an exceptionally regal layout and is most suitable for hosting very important personalities. It is more than four times the size of a presidential suite and has a Lounge and bar area, Working / dining area, large screen TVs, hi-fi stereo system and luxurious bathroom with a Jacuzzi and shower. It can accommodate an extra bed. The suite comes with full complimentary bar and VIP gifts.',
      images: [PenthouseSuite1, PenthouseSuite2, PenthouseSuite3],
      price: '$1000 per night',
      capacity: '6-8 people',
      amenities: ['Wi-Fi', 'Air conditioning', 'TV', 'Mini-bar', 'Safe', 'Jacuzzi', 'Spa', 'Gym', 'Pool']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className='hero-section bg-cover bg-center h-56 flex items-center justify-center' style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1 className='text-white text-4xl font-bold p-4 rounded-lg'>Our Rooms</h1>
      </div>

      {/* Room Categories */}
      <section className='container mx-auto px-4 py-8 bg-gray-100'>
        <h2 className='text-4xl text-center font-bold text-slate-800 mb-8'>Room Categories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {rooms.map((room) => (
            <div key={room.id} className='bg-white shadow-lg rounded-lg p-4'>
              <img src={room.images[0]} alt={room.name} className='w-full h-48 object-cover rounded-lg mb-4' />
              <h3 className='text-2xl font-bold text-slate-800 mb-2'>{room.name}</h3>
              <p className='text-gray-700 mb-4'>{room.description}</p>
              <button onClick={() => openModal(room)} className='bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded'>View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Room Details"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedRoom && (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedRoom.name}</h2>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
              {selectedRoom.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${selectedRoom.name} ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                </div>
              ))}
            </Carousel>
            <p className="text-gray-700 mb-4"><strong>Description:</strong> {selectedRoom.detailed_description}</p>
            <p className="text-gray-700 mb-4"><strong>Price:</strong> {selectedRoom.price}</p>
            <p className="text-gray-700 mb-4"><strong>Capacity:</strong> {selectedRoom.capacity}</p>
            <p className="text-gray-700 mb-4"><strong>Amenities:</strong> {selectedRoom.amenities.join(', ')}</p>
            <button className="bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded mr-2">Book Now</button>
            <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Rooms