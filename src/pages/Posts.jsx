import React, { useState } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import useFetch from '../hooks/useFetch'
import { createPost } from '../lib/posts'

export default function Posts(){
  const { data: fetchedPosts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [posts, setPosts] = useState(fetchedPosts || [])

  // Keep local posts in sync when fetchedPosts arrives/changes
  React.useEffect(()=>{
    if (fetchedPosts) setPosts(fetchedPosts)
  },[fetchedPosts])

  async function handleCreate(newPost){
    try{
      const created = await createPost(newPost)
      // JSONPlaceholder returns id 101 for created posts — merge into UI
      setPosts(prev => [created, ...prev])
    }catch(err){
      console.error('Create post failed', err)
      alert('Failed to create post: '+err.message)
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Posts</h2>
      <section style={{marginBottom:20}}>
        <h3>Create a post</h3>
        <PostForm onCreate={handleCreate} />
      </section>

      {loading && <p>Loading posts...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <PostList posts={posts || []} />}
    </div>
  )
}
