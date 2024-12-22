import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl text-center font-bold text-slate-800 mb-8'>If you have any questions don't hesitate to contact us.</h1>
      <div className='flex flex-col md:flex-row items-start justify-evenly'>
        {/* Contact Information */}
        <div className='max-w-lg bg-white p-8 shadow-lg rounded-lg mb-8 md:mb-0 md:mr-4'>
          <h2 className='text-2xl font-bold text-slate-800 mb-4'>Contact Information</h2>
          <div className='flex items-center mb-4'>
            <FaMapMarkerAlt className='text-zinc-500 mr-2' />
            <p className='text-gray-700'>123 Luxury St, Lagos, Nigeria</p>
          </div>
          <div className='flex items-center mb-4'>
            <FaPhone className='text-zinc-500 mr-2' />
            <p className='text-gray-700'>+234 123 456 7890</p>
          </div>
          <div className='flex items-center mb-4'>
            <FaPhone className='text-zinc-500 mr-2' />
            <p className='text-gray-700'>+234 987 654 3210</p>
          </div>
          <div className='flex items-center'>
            <FaEnvelope className='text-zinc-500 mr-2' />
            <p className='text-gray-700'>info@jacksuites.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className='max-w-3xl w-full bg-white p-8 shadow-lg rounded-lg'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              rows='5'
              placeholder='Your Message'
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-zinc-500 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact