import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function PostDetail(){
  const { id } = useParams()
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (loading) return <p style={{padding:20}}>Loading post...</p>
  if (error) return <p style={{padding:20}}>Error: {error}</p>
  if (!post) return <p style={{padding:20}}>No post found.</p>

  return (
    <div style={{padding:20}}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to="/posts">← Back to posts</Link>
    </div>
  )
}
