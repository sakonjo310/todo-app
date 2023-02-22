import React from 'react'
import TodoItem from './TodoItem'

const Container = (props) => {
  console.log("WHAT IS GOING ON?:", props.todos)
  return (
    <div className='container'>
      {props.todos.map((todo, i) => {
        return (
          <TodoItem key={i} task={todo.todo} finished={todo.finished} id={todo.id} handleDelete={props.handleDelete}/>
        )
      })}
    </div>
  )
}

export default Container