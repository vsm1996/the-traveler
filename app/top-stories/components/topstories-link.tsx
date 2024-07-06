import { MultimediaObjectProp, TopStoryProp } from '@/app/types/propTypes'
import Image from 'next/image'
import Link from 'next/link'

const TopStoriesLink = ({ title, abstract, byline, published_date, multimedia, url }: TopStoryProp) => {
  const imageSrc = multimedia.filter((item: MultimediaObjectProp) => item.format === "threeByTwoSmallAt2X").shift()
  const publishedDate = new Date(published_date).toDateString()
  return (
    <Link
      href={url}
      target='_blank'
      className={`
      w-3/4 h-full flex flex-col lg:flex-row items-center cursor-pointer 
    border border-b-secondary border-t-0 border-l-0 border-r-0 py-8
    ease-in-out duration-300 hover:transition-all hover:bg-secondary
    `}>
      <div className='w-full lg:w-2/3 mb-5 flex flex-col gap-4 lg:gap-3 items-start px-12'>
        <h2 className='text-3xl ease-in-out duration-300 hover:transition-all hover:underline'>{title}</h2>
        <p className='w-full lg:w-2/3'>{abstract}</p>
        <span className=''>
          <p>{byline}</p>
          <small>{publishedDate}</small>
        </span>
      </div>
      <div className='w-full lg:w-1/3 h-full'>
        {imageSrc && (<Image
          src={imageSrc?.url}
          width={imageSrc.width}
          height={imageSrc.height}
          alt={imageSrc.caption}
          className='object-cover object-center h-full w-full rounded-sm'
        />)}
      </div>
    </Link>
  )
}

export default TopStoriesLink
