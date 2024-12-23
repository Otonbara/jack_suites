import React from 'react'
import ServiceImage1 from '../assets/swimming-pool.jpg'
import ServiceImage2 from '../assets/spa(0).jpg'
import ServiceImage3 from '../assets/gym.jpg'
import ServiceImage4 from '../assets/dining(1).jpg'
import ServiceImage5 from '../assets/tennis-court.jpg'
import ServiceImage6 from '../assets/Hair-salon.jpg'

function Services() {

  const services = [
    {
      id: 1,
      name: 'Swimming Pool',
      description: 'Enjoy a refreshing swim in our luxurious pool.',
      image: ServiceImage1
    },
    {
      id: 2,
      name: 'Spa & Wellness',
      description: 'Relax and rejuvenate with our spa and wellness services.',
      image: ServiceImage2
    },
    {
      id: 3,
      name: 'Fitness Center',
      description: 'Stay fit and healthy with our state-of-the-art fitness center.',
      image: ServiceImage3
    },
    {
      id: 4,
      name: 'Restaurant & Bar',
      description: 'Indulge in gourmet dining and fine drinks at our restaurant and bar.',
      image: ServiceImage4
    },
    {
      id: 5,
      name: 'Tennis Court',
      description: 'Play a game of tennis with friends and family at our tennis court.',
      image: ServiceImage5
    },
    {
      id: 6,
      name: 'Hair Salon',
      description: 'Pamper yourself with our top-notch hair salon services.',
      image: ServiceImage6 
    }
  ]

  return (
    <div>
      {/* Services Section */}
      <section className='container mx-auto px-4 py-8'>
        <h2 className='text-4xl text-center font-bold text-slate-800 mb-8'>Recreational Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' data-aos="flip-up">
          {services.map((service) => (
            <div key={service.id} className='bg-white shadow-lg rounded-lg p-4'>
              <img src={service.image} alt={service.name} className='w-full h-48 object-cover rounded-lg mb-4' />
              <h3 className='text-2xl font-bold text-slate-800 mb-2'>{service.name}</h3>
              <p className='text-gray-700 mb-4'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
