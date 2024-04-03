'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react'
import apiClient from '@/app/services/api-client';
import { AxiosResponse, AxiosError } from 'axios';
import Post from '../post';

const Timeline = () => {
  const [posts, setPosts] = useState<any>([])
  const [error, setError] = useState<any>()

  useEffect(() => {

    const handleFetch = async () => {
      apiClient
        .get('/post')
        .then((res: AxiosResponse) => {
          setPosts(res.data)
        })
        .catch((err: AxiosError) => {
          setError(err)
        })
    }

    handleFetch()
  }, [posts])

  return (
    <div>
      <ul className='flex flex-col'>
        {posts.map((post: any) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  )
}

export default Timeline
