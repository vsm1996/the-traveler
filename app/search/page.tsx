'use client'
import { FormEvent, useContext, useRef } from 'react'
import { SearchContext } from '../context/context'
import SearchStoriesLink from './components/search-link'

const SearchPage = () => {
  const buttonRef = useRef<HTMLInputElement | null>(null)
  const { searchStories, fetchSearchData } = useContext(SearchContext)

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (buttonRef) {
      console.log(buttonRef.current!.value)
      fetchSearchData(buttonRef.current!.value)
    }
  }

  return (
    <div>
      <form className='flex items-center gap-6' onSubmit={handleSearch}>
        <div className='flex items-center gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input className='rounded-sm text-black pl-1' type='text' ref={buttonRef} placeholder='Search' />
        </div>
        <input className='btn btn-neutral text-base-200' type='submit' />
      </form>
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
