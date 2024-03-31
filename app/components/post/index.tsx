import React from 'react'

interface User {
  name: string,

}

const Post = ({ post }: any) => {
  return (
    <div>
      {post.userId}
      {post.message}
      {post.likes}
      {/* TODO - comments/replies */}
    </div>
  )
}

export default Post
