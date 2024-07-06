import { MultimediaObjectProp, TopStoryProp } from '@/app/types/propTypes'
import Image from 'next/image'
import Link from 'next/link'

const SearchStoriesLink = ({ headline, snippet, lead_paragraph, byline, pub_date, multimedia, url }: any) => {
  const imageSrc = multimedia.filter((item: MultimediaObjectProp) => item.subtype === "largeHorizontal375").shift()
  const publishedDate = new Date(pub_date).toDateString()

  return (
    <Link
      href={url}
      target='_blank'
      className={`
      w-full lg:w-3/4 h-full flex flex-col lg:flex-row items-center cursor-pointer 
    border border-b-secondary border-t-0 border-l-0 border-r-0 py-8
    ease-in-out duration-300 hover:transition-all hover:bg-secondary
    `}>
      <div className='w-full lg:w-2/3 mb-5 flex flex-col gap-4 lg:gap-3 items-start px-12'>
        <h2 className='text-3xl ease-in-out duration-300 hover:transition-all hover:underline'>{headline.main}</h2>
        <p className='w-full lg:w-2/3'>{snippet}</p>
        <span className=''>
          <p>{byline.original}</p>
          <small>{publishedDate}</small>
        </span>
      </div>
    </Link>
  )
}

export default SearchStoriesLink
