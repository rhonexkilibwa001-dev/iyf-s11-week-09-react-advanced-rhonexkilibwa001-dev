import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/PostCard.module.css'

export default function PostCard({post}){
  return (
    <article className={styles.card}>
      <h4>{post.title}</h4>
      <p>{post.body.slice(0,120)}{post.body.length>120? '…': ''}</p>
      <Link to={`/posts/${post.id}`}>Read more</Link>
    </article>
  )
}
