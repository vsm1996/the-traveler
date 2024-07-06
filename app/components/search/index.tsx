import { useRef } from 'react'

const Search = () => {
  const buttonRef = useRef<HTMLInputElement | null>(null)
  const handleSearch = () => {
    if (buttonRef) {
      console.log(buttonRef.current!.value)
    }
  }
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input className='rounded-sm text-black pl-1' ref={buttonRef} onClick={handleSearch} placeholder='Search' />

    </div>
  )
}

export default Search
