'use client'
import React, { useContext } from 'react'
import { TopStoriesContext } from '@/app/context/context'
import Image from 'next/image'

const HomePageHero = () => {
  const { topStories } = useContext(TopStoriesContext)
  console.log(topStories[1])

  return (
    <section className='w-full h-[85vh] flex'>
      <div className='w-full flex-grow-1'>
        Top Story
      </div>
      <div className='w-full flex-grow-1'>
        Image
      </div>
    </section>
  )
}

export default HomePageHero
