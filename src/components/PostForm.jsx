import React, { useState } from 'react'

export default function PostForm({onCreate}){
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')

  function submit(e){
    e.preventDefault()
    if(!title||!body) return
    onCreate({title,body})
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={submit} style={{display:'grid',gap:8,maxWidth:600}} aria-label="Create post form">
      <label>
        Title
        <input
          value={title}
          onChange={e=>setTitle(e.target.value)}
          aria-label="Post title"
          name="title"
          required
        />
      </label>
      <label>
        Body
        <textarea
          value={body}
          onChange={e=>setBody(e.target.value)}
          rows={6}
          aria-label="Post body"
          name="body"
          required
        />
      </label>
      <button type="submit" aria-label="Create post button">Create Post</button>
    </form>
  )
}
