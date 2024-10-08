'use client'
import { TopStoriesContext } from '@/app/context/context'
import { TopStoryProp } from '@/app/types/propTypes'
import React, { useContext } from 'react'
import TopStoriesCard from './components/topstories-card'
import { tangerine } from '@/app/font'

const TopStoriesPreview = () => {
  const { topStories } = useContext(TopStoriesContext)
  const topStoriesPreviewArr: TopStoryProp[] = topStories.slice(1, 5) as TopStoryProp[]

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='my-16 lg:my-20 text-center'>
        <h2 className='text-4xl mb-3 uppercase'>Throughout The World</h2>
        <p className={`${tangerine.className} text-3xl`}>Essential stories of the day</p>
      </div>
      <div className='w-full h-full flex flex-col lg:flex-row justify-around items-stretch gap-4'>
        {topStoriesPreviewArr.map((story, index) => (
          <TopStoriesCard
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
    </div>
  )
}

export default TopStoriesPreview
