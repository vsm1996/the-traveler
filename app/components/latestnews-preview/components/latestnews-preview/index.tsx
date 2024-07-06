import Image from 'next/image'
import { MultimediaObjectProp, WireStoryProp } from '@/app/types/propTypes'
import Link from 'next/link'

const LatestNewsPreview = ({ title, abstract, byline, published_date, multimedia, url }: WireStoryProp) => {
  const imageSrc = multimedia.filter((item: MultimediaObjectProp) => item.format === "mediumThreeByTwo440").shift()
  const publishedDate = new Date(published_date).toDateString()

  return (
    <div
      className={`
      w-full h-full flex items-center cursor-pointer
    border border-b-secondary border-t-0 border-l-0 border-r-0 py-4
    ease-in-out duration-300 hover:transition-all hover:bg-secondary
    `}>
      <div className='w-2/3 flex flex-col gap-3 items-start px-12'>
        <h2 className='text-3xl transition ease-in-out duration-700 hover:transition-all hover:underline'>{title}</h2>
        <p className='w-2/3'>{abstract}</p>
        <span className=''>
          <p>{byline}</p>
          <small>{publishedDate}</small>
        </span>
      </div>
      <div className='w-1/3 h-full'>
        {imageSrc && (<Link href={url}>
          <Image
            src={imageSrc?.url}
            width={imageSrc.width}
            height={imageSrc.height}
            alt={imageSrc.caption}
            className='object-cover object-center h-full w-full rounded-sm'
          />
        </Link>
        )}
      </div>
    </div>
  )
}

export default LatestNewsPreview
