import React from 'react'
import { FaEnvelope, FaPhone, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../Utilis/animationVariants'

function Contact() {
  return (
    <div id='contact' className='bg-heroBG flex items-center justify-center py-28 px-8'>

      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>


          <div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"} 
                  viewport={{once: false, amount: 0.7}}
          
          className='space-y-8'>
            <h2 className='text-lg font-bold font-secondary mb-4 text-white'>
              Talk To Us
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaUserAlt className='text-primary' />
                </div>
                <div className="space-y-1">
                  <h3 className='text-sm font-medium'>Customer Support</h3>
                  <p className='text-xs'>Get assisted by our highly qualified technicians 24 hours a day, 7 days a week.</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaEnvelope className='text-primary' />
                </div>
                <div className="space-y-1">
                  <h3 className='text-sm font-medium'>Email</h3>
                  <p className='text-xs'>Send us an email and get a rely within 24 hours.</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaPhone className='text-primary' />
                </div>
                <div className="space-y-1">
                  <h3 className='text-sm font-medium'>Phone</h3>
                  <p className='text-xs'>Give us a call, our line is active 24/7.</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaWhatsapp className='text-primary' />
                </div>
                <div className="space-y-1">
                  <h3 className='text-sm font-medium'>Whatsapp</h3>
                  <p className='text-xs'>Send us a message on our official whatsapp number.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>

            <h2 className='text-lg font-bold font-secondary mb-4'>
              Send A Direct Message
            </h2>
            <form action="" className='space-y-4'>
              <div className='flex flex-col gap-4'>
                <input type="text" id='name' placeholder='Enter your name' className='p-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-primary' />
              </div>
              <div className='flex flex-col gap-4'>
                <input type="number" id='number' placeholder='Enter your phone number' className='p-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-primary' />
              </div>
              <div className='flex flex-col gap-4'>
                <input type="email" id='email' placeholder='Enter your email' className='p-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-primary' />
              </div>
              <div className='flex flex-col gap-4'>
                <textarea name="message" id="message" cols="30" rows="5" placeholder='Enter your message' className='p-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-primary'></textarea>
              </div>
              <button className='bg-primary text-white py-3.5 rounded-lg hover:bg-primary/90 px-8 w-full'>Send Message</button>

            </form>

          </div>



        </div>
      </div>


    </div>
  )
}

export default Contact