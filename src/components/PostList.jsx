import React from 'react'
import PostCard from './PostCard'
import useFetch from '../hooks/useFetch'

export default function PostList(){
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error}</p>
  if (!posts || posts.length === 0) return <p>No posts found.</p>

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12}}>
      {posts.slice(0,12).map(p=> <PostCard key={p.id} post={p} />)}
    </div>
  )
}
