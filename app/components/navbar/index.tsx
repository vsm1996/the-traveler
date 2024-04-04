'use client'
import React from 'react'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import ThemeController from '../themeController'

const NavBar = () => {
  const { status, data: session } = useSession()
  console.log(status)

  return (
    <nav className='p-5 navbar bg-base-300'>
      <ul className='w-full flex items-center'>
        <li className='mr-9'>
          <ThemeController />
        </li>
        {status === 'authenticated' && (
          <li className='flex justify-between items-center w-full space-x-3'>
            <span className='text-lg font-extrabold'>Welcome, {session.user!.firstName || session.user!.name}</span>
            <span>
              <Link href='/dashboard' className='link link-hover mr-5'>Dashboard</Link>
              <Link href='/api/auth/signout' className='link link-hover'>Sign Out</Link>
            </span>
          </li>
        )}
        {status === 'unauthenticated' && <Link className='mr-3 link link-hover' href='/api/auth/signin'>
          Sign In
        </Link>}
        {status === 'unauthenticated' && <Link className='link link-hover' href='/register'>
          Register
        </Link>}
      </ul>
    </nav>
  )
}

export default NavBar
