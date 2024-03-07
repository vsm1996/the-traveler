'use client'
import React from 'react'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const { status, data: session } = useSession()

  return (
    <nav className='p-5'>
      <ul>
        {status === 'authenticated' && (
          <div className='flex space-x-3 items-center'>
            <span className='text-lg font-extrabold'>{session.user!.firstName || session.user!.name}</span>
            <Link href='/api/auth/signout'>Sign Out</Link>
          </div>
        )}
        {status === 'unauthenticated' && <Link className='mr-3' href='/api/auth/signin'>
          Sign In
        </Link>}
        {status === 'unauthenticated' && <Link href='/register'>
          Register
        </Link>}
      </ul>
    </nav>
  )
}

export default NavBar
