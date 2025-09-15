'use client'
import Hero from '@/components/main/HeroBackground'
import NavbarHome from '@/components/main/NavbarHome'
import { ProjectsCard } from '@/components/main/Projects'
import TechStack from '@/components/main/TechStack'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen w-full bg-black relative'>
        <Hero/>
      </div>
      <div className='absolute top-0 w-full'>
        <div className='bg-grey-800'>
          <NavbarHome />
        </div>
      </div>
      <div>
        <TechStack/>
      </div>
      <div>
        <ProjectsCard/>
      </div>
    </>

  )
}

export default page