import React from 'react'
import {useState, useEffect, useRef} from 'react'

import { ITodo } from '../types/data'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = () => {
     setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
     }])
  }
 

  return (
    <div className='wrap'>
      <h1>FC</h1>
      <div className='flex_gorizont'>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={addTodo} className='btn'>Add</button>
      </div>
    </div>
  )
}

export {App}