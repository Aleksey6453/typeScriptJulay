import React from 'react'
import {useState, useEffect, useRef} from 'react'

import { ITodo } from '../types/data'
import { Form } from './Form'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const addTodo = () => {

    if(value){
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false
         }])
         setValue('')
    }  
  }
 
  return (
    <div className='wrap'>
      <h1>FC</h1>
      <div className='flex_gorizont'>
        <input type="text" value={value} onChange={handleChange}/>
        <button onClick={addTodo} className='btn'>Add</button>
      </div>
      <TodoList items={todos} />
      
      
    </div>
  )
}

export {App}