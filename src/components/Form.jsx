import React, { useState } from 'react'
import TodoItem from './TodoItem';
import axios from 'axios'


const Form = () => {
  const randomNumber = () => Math.floor(Math.random() * 150) + 1;
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [finished, setFinished] = useState(false)

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      setTodos([...todos, {id: Math.random(), todo: todo, finished: finished}]);
      setFinished(false);
      setTodo("")
    } else {
      alert("Task name cannot be empty")
    }
  }
  // console.log(todos);

  const handleChangeCheckbox = () => {
    setFinished(!finished);
  }

  const handleDelete = (id) => {
    const afterDelete = todos.filter(todo => todo.id !== id);
    console.log("AFTER:", afterDelete)
    setTodos([...afterDelete])
  }
  console.log("WHAT ABOUT NOW:", todos)

  const handleRandomClick = () => {
    const url = `https://dummyjson.com/todos/${randomNumber()}`;
    axios.get(url)
      .then(response => {
        console.log(response.data);
        const data = response.data;
        setTodos(prev => [...prev, {id: data.id, todo: data.todo, finished: false}])
      })
  }

  const todoItems = todos.map((todo, i) => {
    return (
          <TodoItem 
            key={i} 
            task={todo.todo} 
            finished={finished} 
            id={todo.id} 
            handleDelete={handleDelete}
          />
        )
  })

  return (
    <div>
      <form>
        <label>
          What task do you want to add?
          <br />
          <input type="text" name="text" value={todo} onChange={handleChange} />
        </label>
        <br />
        <label htmlFor='finished'>Finished?</label>
        <input id="finished" type="checkbox" checked={finished} name="checkbox" onChange={handleChangeCheckbox}/>
        <br />
        <input type="submit" name="submit" onClick={handleClick}/>
        <br />
      </form>
      <button onClick={handleRandomClick}>Get Random</button>
      <div className='todoItem'>{todoItems}</div>
    </div>
  )
}

export default Form