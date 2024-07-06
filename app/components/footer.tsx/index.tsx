import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className={`
    flex flex-col items-center py-4 gap-4
    border border-t-1 border-t-secondary border-b-0 border-l-0 border-r-0
    `}>
      <div className='w-full h-full flex flex-col items-center gap-1'>
        <Image
          priority
          src='/ny-times-logo.png'
          width={150}
          height={150}
          alt='ny times logo'
        />
        <h3 className='text-orange-200'>The Traveler</h3>
      </div>
      <ul className='w-full h-full flex items-center justify-evenly list-none'>
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
          <Link href='/latest-news' className='hover:text-orange-200 hover:underline'>
            Latest News
          </Link>
        </li>
        <li>
          <Link href='/aviation-news' className='hover:text-orange-200 hover:underline'>
            Aviation News
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
