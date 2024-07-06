import { MultimediaObjectProp, WireStoryProp } from '@/app/types/propTypes'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const LatestNewsHero = ({ title, abstract, byline, published_date, multimedia, url }: WireStoryProp) => {
  const imageSrc = multimedia.filter((item: MultimediaObjectProp) => item.format === "mediumThreeByTwo440").shift()
  const publishedDate = new Date(published_date).toDateString()

  return (
    <div className='w-full h-full flex items-center lg:items-stretch flex-col-reverse lg:flex-row my-28'>
      <div className='w-full h-full lg:basis-2/3'>
        {imageSrc && (
          <Link href={url} className='relative w-full h-full'>
            <Image
              priority
              src={imageSrc?.url}
              width={imageSrc.width}
              height={imageSrc.height}
              alt={imageSrc.caption}
              className='object-cover object-left h-full w-full rounded-sm'
            />
          </Link>
        )}
      </div>
      <div className='w-full h-auto lg:flex-grow-1 flex flex-col text-center items-center justify-center p-14 bg-secondary gap-5'>
        <h2 className='text-3xl hover:underline'>{title}</h2>
        <p className='lg:w-2/3'>{abstract}</p>
        <span className=''>
          <p>{byline}</p>
          <small>{publishedDate}</small>
        </span>
      </div>
    </div>
  )
}

export default LatestNewsHero
