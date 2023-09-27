import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import NavBar from '../Components/NavBar'
import Background from '../Components/Background'
import Counter from '../Components/Counter'
import ParticleSystem from '../Components/ParticleSystem'

function Home() {
  
  return (
    <Background className="flex justify-items-center h-screen">
      <NavBar />
      <div className='m-auto text-white flex'>
      {/* <Counter /> */}
      <img src='/Logo512.png' className=' w-64 h-64 m-auto' />
      </div>
    </Background>

  )
}

export default Home