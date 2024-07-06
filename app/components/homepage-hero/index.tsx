'use client'
import React, { useContext } from 'react'
import Image from 'next/image'

import { TopStoriesContext } from '@/app/context/context'
import { TopStoryProp } from '@/app/types/propTypes'
import { tangerine } from '@/app/font'
import Link from 'next/link'

const HomePageHero = () => {
  const { topStories } = useContext(TopStoriesContext)


  if (topStories[0]) {
    const foremostStory: TopStoryProp = topStories[0] as TopStoryProp
    const { title, abstract, byline, published_date, multimedia, url } = foremostStory

    const imageSrc = multimedia.filter(item => item.format === "Super Jumbo").shift()
    const publishedDate = new Date(published_date).toDateString()


    return (
      <section className='w-full h-[90vh] flex flex-col lg:flex-row'>
        <div className='w-full basis-1/2 lg:basis-5/6 px-8 mb-8 lg:mb-0 gap-5 flex flex-col items-center justify-center text-center'>
          <h1 className={`${tangerine.className} text-8xl`}>{title}</h1>
          <p className='text-wrap text-xl'>{abstract}</p>
          <small className='text-base'>{byline}, {publishedDate}</small>
        </div>
        <div className='relative w-full h-full lg:flex-grow-1 overflow-hidden'>
          {imageSrc && (
            <Link href={url} >
              <Image
                priority
                src={imageSrc.url}
                alt={imageSrc.caption}
                sizes='100vw'
                fill
                className='object-cover object-center'
              />
            </Link>
          )}
        </div>
      </section>
    )
  } else {
    return (<div className='w-full h-[90vh] flex justify-center p-12'>
      <span className="loading loading-ring loading-lg"></span>
    </div>)
  }
}

export default HomePageHero
