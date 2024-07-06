'use client'
import { useRef } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const buttonRef = useRef<HTMLInputElement | null>(null)
  const handleSearch = () => {
    if (buttonRef) {
      console.log(buttonRef.current!.value)
    }
  }

  return (
    <nav className='w-full border border-t-secondary border-b-secondary border-l-0 border-r-0'>
      <ul className='p-3 m-auto w-full lg:w-1/2 flex justify-around items-center'>
        <li>
          <Link href='/' className='hover:text-orange-200 hover:underline'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/top-stories' className='hover:text-orange-200 hover:underline'>
            Top Stories
          </Link>
        </li>
        <li>
          <Link href='/latest-stories' className='hover:text-orange-200 hover:underline'>
            Latest News
          </Link>
        </li>
        <li className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input className='rounded-sm text-black pl-1' ref={buttonRef} onClick={handleSearch} placeholder='Search' />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
