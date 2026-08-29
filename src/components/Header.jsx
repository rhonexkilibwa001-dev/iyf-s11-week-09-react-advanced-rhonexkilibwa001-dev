import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from '../styles/Header.module.css'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.brand}><Link to="/">CommunityHub</Link></div>
      <nav aria-label="Main navigation">
        <NavLink to="/" end className={({isActive})=>isActive?styles.active:undefined}>Home</NavLink>
        <NavLink to="/posts" className={({isActive})=>isActive?styles.active:undefined}>Posts</NavLink>
        <NavLink to="/exercises" className={({isActive})=>isActive?styles.active:undefined}>Exercises</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?styles.active:undefined}>About</NavLink>
      </nav>
    </header>
  )
}
