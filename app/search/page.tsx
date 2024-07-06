'use client'
import { useContext } from 'react'
import { SearchContext } from '../context/context'
import SearchStoriesLink from './components/search-link'
import SearchForm from '../components/search'

const SearchPage = () => {
  const { searchStories } = useContext(SearchContext)

  return (
    <div className='pt-6 flex flex-col items-center'>
      <SearchForm />
      {searchStories && searchStories.map((story, index) => (
        <SearchStoriesLink
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
  )
}

export default SearchPage
