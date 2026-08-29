import React from 'react'
import UseEffectDemo from '../exercises/UseEffectDemo'
import CustomHooksDemo from '../exercises/CustomHooksDemo'

export default function Exercises(){
  return (
    <div style={{padding:20}}>
      <h2>Lesson Exercises</h2>
      <section style={{marginBottom:20}}>
        <h3>Lesson 17: useEffect & Data Fetching</h3>
        <UseEffectDemo />
      </section>

      <section style={{marginBottom:20}}>
        <h3>Lesson 18: Custom Hooks & Styling</h3>
        <CustomHooksDemo />
      </section>

      <p>More exercises will be added: useFetch variations, routing examples, and styling patterns.</p>
    </div>
  )
}
