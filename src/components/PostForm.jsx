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
    <form onSubmit={submit} style={{display:'grid',gap:8,maxWidth:600}}>
      <label>
        Title
        <input value={title} onChange={e=>setTitle(e.target.value)} />
      </label>
      <label>
        Body
        <textarea value={body} onChange={e=>setBody(e.target.value)} rows={6} />
      </label>
      <button type="submit">Create Post</button>
    </form>
  )
}
