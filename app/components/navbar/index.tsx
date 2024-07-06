'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='w-full border border-t-secondary border-b-secondary border-l-0 border-r-0'>
      <ul className='p-3 m-auto w-full lg:w-1/2 flex justify-around items-center list-none'>
        <li>
          <Link href='/' className={`hover:text-orange-200 hover:underline ${pathname === '/' ? 'text-orange-200 underline' : null}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/top-stories' className={`hover:text-orange-200 hover:underline ${pathname === '/top-stories' ? 'text-orange-200 underline' : null}`}>
            Top Stories
          </Link>
        </li>
        <li>
          <Link href='/latest-news' className={`hover:text-orange-200 hover:underline ${pathname === '/latest-news' ? 'text-orange-200 underline' : null}`}>
            Latest News
          </Link>
        </li>
        <li>
          <Link href='/aviation-news' className={`hover:text-orange-200 hover:underline ${pathname === '/aviation-news' ? 'text-orange-200 underline' : null}`}>
            Aviation News
          </Link>
        </li>
        <li className='flex items-center gap-2'>
          <Link href='/search'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 hover:stroke-orange-200 ${pathname === '/search' ? 'text-orange-200' : null}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
