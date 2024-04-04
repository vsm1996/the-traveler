'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react'
import apiClient from '@/app/services/api-client';
import { AxiosResponse, AxiosError, CanceledError } from 'axios';
import Post from '../post';
import CreatePost from './createPost';

const Timeline = () => {
  const [posts, setPosts] = useState<any>([])
  const [error, setErrorMessage] = useState<any>()


  useEffect(() => {
    const handleFetch = async () => {
      apiClient
        .get('/post')
        .then((res: AxiosResponse) => {
          const newData = res.data.reverse()
          setPosts(newData)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return
          setErrorMessage(err.response.data.error)
        })
    }

    handleFetch()
  }, [])

  return (
    <div>
      <CreatePost />
      {error && <p>{error}</p>}
      <ul className='flex flex-col'>
        {/* reverse posts */}
        {posts.map((post: any) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  )
}

export default Timeline
