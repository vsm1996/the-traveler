'use client'
import { useContext } from 'react'
import { WireContext } from '../context/context'
import LatestNewsLink from './components/latestnews-link'

const LatestNewsPage = () => {
  const { wireStories } = useContext(WireContext)

  // TODO: PAGINATION
  return wireStories.length > 0 ? (
    <div className='w-full h-full flex flex-col items-center'>
      <h1 className={`
        w-full text-center pb-12 px-4 text-5xl mt-20
          border border-b-secondary border-t-0 border-l-0 border-r-0
          `}>Latest Travel News</h1>
      {wireStories && wireStories.map((story, index) => (
        <LatestNewsLink
          key={index}
          title={story.title}
          abstract={story.abstract}
          byline={story.byline}
          published_date={story.published_date}
          multimedia={story.multimedia}
          url={story.url}
        />
      ))}
    </div>
  ) : (
    <span className="m-auto loading loading-ring loading-lg"></span>
  )
}

export default LatestNewsPage
