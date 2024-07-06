'use client'
import { useContext } from 'react'
import { AviationContext } from '../context/context'
import AviationNewsLink from './components/aviationnews-link'

const AviationPage = () => {
  const { aviationNews } = useContext(AviationContext)

  return aviationNews.length > 0 ? (
    <div className='w-full h-full flex flex-col items-center'>
      <h1 className={`
      w-full text-center pb-12 px-4 text-5xl mt-20
        border border-b-secondary border-t-0 border-l-0 border-r-0
        `}>Aviation News Stories</h1>
      {aviationNews && aviationNews.map((story, index) => (
        <AviationNewsLink
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
  ) : (
    <span className="m-auto loading loading-ring loading-lg"></span>
  )
}

export default AviationPage
