import React from 'react'
import {ITodo} from '../types/data'

interface ITodoItem extends ITodo {}

const TodoItem: React.FC<ITodoItem> = (props) => {

    const {id, title, complete} = props;

  return <div className='flex_gorizont2'>
       <input type="checkbox" checked={complete} />
       <h2>{title}</h2>
       <button className='btn'>x</button>
    </div>
  
}

export  {TodoItem}
