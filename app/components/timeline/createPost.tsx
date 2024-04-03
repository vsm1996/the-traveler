'use client';

import apiClient from '@/app/services/api-client'
import { useSession } from 'next-auth/react'
import React, { FormEvent, useRef, useState } from 'react'
import { CanceledError } from 'axios'

const CreatePost = () => {
  const [error, setErrorMessage] = useState(null)
  const { data: session }: any = useSession()
  const messageRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (messageRef.current) {
      apiClient
        .post(`/post/${session.sub}`, { message: messageRef.current.value })
        .then(res => setErrorMessage(null))
        .catch(err => {
          if (err instanceof CanceledError) return
          setErrorMessage(err.response.data.error)
        })
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input ref={messageRef} type="text" />
        <button type='submit'> Post </button>
      </form>
    </>
  )
}

export default CreatePost
