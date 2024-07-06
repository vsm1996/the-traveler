'use client'
import { AviationContext } from '@/app/context/context'
import React, { useContext } from 'react'
import AviationNewsCard from './components/aviationnews-card'
import { tangerine } from '@/app/font'

const AviationNewsPreview = () => {
  const { aviationNews } = useContext(AviationContext)
  const aviationNewsPreviewArr: any[] = aviationNews.slice(0, 4) as any[]

  return (
    <div className='mb-8'>
      <div className='my-16 lg:my-20 text-center'>
        <h2 className='text-4xl mb-3 uppercase'>Above The Clouds</h2>
        <p className={`${tangerine.className} text-3xl`}>Latest in aviation news</p>
      </div>
      <div className='w-full h-full flex flex-col lg:flex-row justify-around items-stretch gap-4'>
        {aviationNewsPreviewArr.map((story, index) => (
          <AviationNewsCard
            key={index}
            headline={story.headline}
            snippet={story.snippet}
            lead_paragraph={story.lead_paragraph}
            byline={story.byline}
            pub_date={story.pub_date}
            multimedia={story.multimedia}
            url={story.web_url}
          />
        ))}
      </div>
    </div>
  )
}

export default AviationNewsPreview
