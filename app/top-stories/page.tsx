'use client'
import React, { useContext } from 'react'
import { TopStoriesContext } from '../context/context'
import TopStoriesLink from './components/topstories-link'

const TopStoriesPage = () => {
  const { topStories } = useContext(TopStoriesContext)

  // TODO: PAGINATION
  return topStories.length > 0 ? (
    <div className='w-full h-full flex flex-col items-center'>
      <h1 className={`
      w-full text-center pb-12 px-4 text-5xl mt-20
        border border-b-secondary border-t-0 border-l-0 border-r-0
        `}>Top Travel Stories</h1>
      {topStories && topStories.map((story, index) => (
        <TopStoriesLink
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

export default TopStoriesPage
