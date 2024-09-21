'use client'
import React, { useContext } from 'react'
import Image from 'next/image'

import { TopStoriesContext } from '@/app/context/context'
import { TopStoryProp } from '@/app/types/propTypes'
import { tangerine } from '@/app/font'
import Link from 'next/link'
import { formatPublishedDate } from '@/app/utlis/tools'

const HomePageHero = () => {
  const { topStories } = useContext(TopStoriesContext)

  if (topStories.length > 0) {
    const foremostStory: TopStoryProp = topStories[0] as TopStoryProp
    const { title, abstract, byline, published_date, multimedia, url } = foremostStory

    const imageSrc = multimedia.filter(item => item.format === "Super Jumbo").shift()
    const publishedDate = formatPublishedDate(published_date)


    return (
      <section data-testid="homepagehero" className='w-full h-full lg:h-[90vh] flex flex-col items-stretch lg:flex-row'>
        <div className='w-full h-auto basis-1/2 lg:basis-5/6 px-8 mb-8 lg:mb-0 gap-5 flex flex-col items-center justify-center text-center'>
          <h1 className={`${tangerine.className} text-6xl`}>{title}</h1>
          <p className='text-wrap text-xl'>{abstract}</p>
          <small className='text-base'>{byline}, {publishedDate}</small>
        </div>
        <div className='relative w-full h-[40vh] lg:h-auto overflow-hidden'>
          {imageSrc && (
            <Link href={url} className='absolute w-full h-full'>
              <Image
                priority
                src={imageSrc.url}
                alt={imageSrc.caption || ''}
                fill
                sizes='100vw'
                className='object-cover object-top w-full h-full'
              />
            </Link>
          )}
        </div>
      </section>
    )
  } else {
    return (
      <div data-testid='loading' className='w-full h-[90vh] flex justify-center p-12'>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    )
  }
}

export default HomePageHero
