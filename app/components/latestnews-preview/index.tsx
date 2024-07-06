'use client'
import { useContext } from "react"
import { WireContext } from "@/app/context/context"
import { url } from "inspector"
import Link from "next/link"
import { title } from "process"
import LatestNewsCard from "./components/latestnews-preview"
import { MultimediaObjectProp, WireStoryProp } from "@/app/types/propTypes"
import LatestNewsHero from "./components/latestnews-hero"

const LatestNewsPreview = () => {
  const { wireStories } = useContext(WireContext)
  const firstWireStory: WireStoryProp = wireStories[0] as WireStoryProp
  const wireStoriesPreviewArr: WireStoryProp[] = wireStories.slice(2, 6) as WireStoryProp[]

  return (
    <div>
      {firstWireStory && <LatestNewsHero
        title={firstWireStory.title}
        abstract={firstWireStory.abstract}
        byline={firstWireStory.byline}
        published_date={firstWireStory.published_date}
        multimedia={firstWireStory.multimedia}
        url={firstWireStory.url}
      />}
      <div>
        {wireStoriesPreviewArr && wireStoriesPreviewArr.map((story, index) => (
          <LatestNewsCard
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

export default LatestNewsPreview
