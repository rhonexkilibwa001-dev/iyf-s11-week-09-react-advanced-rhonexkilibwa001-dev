import React from 'react'

export default function UseEffectDemo(){
  const [count, setCount] = React.useState(0)

  React.useEffect(()=>{
    document.title = `Clicked ${count} times`
  },[count])

  return (
    <div style={{padding:20}}>
      <h3>useEffect Demo</h3>
      <p>Open the tab title to see effect. Click to increment.</p>
      <button onClick={()=>setCount(c=>c+1)}>Clicked {count} times</button>
    </div>
  )
}
