import { useState } from 'react'
import Image from 'next/image'
import { MultimediaObjectProp, TopStoryProp } from '@/app/types/propTypes'
import Link from 'next/link'
import { formatPublishedDate } from '@/app/utils/tools'

const TopStoriesCard = ({ title, abstract, byline, published_date, multimedia, url }: TopStoryProp) => {
  const [show, setShow] = useState<boolean>(false)

  const imageSrc = multimedia.filter((item: MultimediaObjectProp) => item.format === "threeByTwoSmallAt2X").shift()
  const publishedDate = formatPublishedDate(published_date)

  return (
    <div
      className={`
        w-full h-full flex flex-col items-center rounded-md bg-secondary text-neutral-content self-stretch 
        drop-shadow-md ease-in-out duration-300 transition 
        hover:transition-all hover:drop-shadow-2xl hover:-translate-y-2 hover:bg-secondary-content
        `}
    >
      {imageSrc && <Link target='_blank' href={url} className='relative w-full h-full'>
        <Image
          src={imageSrc?.url}
          width={imageSrc.width}
          height={imageSrc.height}
          alt={imageSrc.caption || ''}
          className='object-contain object-center h-full w-full rounded-md'
        />
      </Link>}
      <div
        className='cursor-pointer w-full h-full lg:min-h-52 lg:max-h-72 lg:h-72 p-4 flex flex-col gap-2'
        onClick={() => { setShow(!show) }}
      >
        <h3 className='hover:underline'>{title}</h3>
        {/* turn into a model */}
        {show ? <p>{abstract}</p> : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        )}
        <span className=''>
          <p>{byline}</p>
          <small>{publishedDate}</small>
        </span>
      </div>
    </div>
  )
}

export default TopStoriesCard
