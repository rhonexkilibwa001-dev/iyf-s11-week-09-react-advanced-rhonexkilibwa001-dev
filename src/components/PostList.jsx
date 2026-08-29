import React from 'react'
import PostCard from './PostCard'

export default function PostList({posts: initialPosts}){
  // If parent passed posts, use them; otherwise render message (parent should fetch)
  if (!initialPosts) return <p>No posts to display.</p>
  if (initialPosts.length === 0) return <p>No posts found.</p>

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12}}>
      {initialPosts.slice(0,12).map(p=> <PostCard key={p.id} post={p} />)}
    </div>
  )
}
