import axios from 'axios'

const BASE = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts(){
  const res = await axios.get(`${BASE}/posts`)
  return res.data
}

export async function fetchPost(id){
  const res = await axios.get(`${BASE}/posts/${id}`)
  return res.data
}

export async function createPost(post){
  const res = await axios.post(`${BASE}/posts`, post)
  return res.data
}
