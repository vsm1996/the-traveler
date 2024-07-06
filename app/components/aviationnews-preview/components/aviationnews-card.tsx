import React, { useState } from 'react'
import Image from 'next/image'
import { MultimediaObjectProp } from '@/app/types/propTypes'
import Link from 'next/link'
import { title } from 'process'
import { formatPublishedDate } from '@/app/utils/tools'

const AviationNewsCard = ({ index, headline, snippet, lead_paragraph, byline, pub_date, multimedia, url }: any) => {
  const [show, setShow] = useState<boolean>(false)

  const imageSrc = multimedia.filter((item: MultimediaObjectProp) => item.subtype === "largeHorizontal375").shift()
  const publishedDate = formatPublishedDate(pub_date)

  return (
    <div
      id={`slide${index}`}
      className={`
      carousel-item flex flex-col mx-1
      w-1/4 h-full rounded-md bg-secondary text-neutral-content self-stretch 
      ease-in-out duration-300 transition hover:transition-all hover:bg-secondary-content
      `}
    >
      {imageSrc && (<Link target='_blank' href={url} className='relative w-full h-full'>
        <Image
          src={`https://static01.nyt.com/${imageSrc?.url}`}
          width={imageSrc.width}
          height={imageSrc.height}
          alt={imageSrc.caption || ''}
          className='object-contain object-center h-full w-full rounded-md'
        />
      </Link>)}
      <div
        className='cursor-pointer w-full h-full lg:min-h-52 lg:max-h-80 lg:h-80 p-4 flex flex-col gap-2'
        onClick={() => { setShow(!show) }}
      >
        <h3 className='hover:underline'>{headline.main}</h3>
        {/* turn into a model */}
        {show ? <p>{snippet}</p> : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        )}
        <span className=''>
          <p>{byline.original}</p>
          <small>{publishedDate}</small>
        </span>
      </div>
    </div>
  )
}

export default AviationNewsCard
