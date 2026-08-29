import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export default function CustomHooksDemo(){
  const [name, setName] = useLocalStorage('demo:name','')

  return (
    <div style={{padding:20}}>
      <h3>Custom Hook: useLocalStorage</h3>
      <label>
        Name
        <input value={name} onChange={e=>setName(e.target.value)} />
      </label>
      <p>Value persisted in localStorage under key "demo:name"</p>
    </div>
  )
}
