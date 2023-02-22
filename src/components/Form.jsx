import React, { useState } from 'react'
import TodoItem from './TodoItem';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Form = () => {
  const randomNumber = () => Math.floor(Math.random() * 150) + 1;
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      setTodos([...todos, {id: Math.random(), todo: todo, isFinished: finished}]);
      setFinished(false);
      setTodo("")
      setError(false)
    } else {
      setError(true)
    }
  }
  // console.log(todos);

  // const handleChangeCheckbox = () => {
  //   setFinished(!finished);
  // }

  const handleDelete = (id) => {
    const afterDelete = todos.filter(todo => todo.id !== id);
    console.log("AFTER:", afterDelete)
    setTodos(afterDelete)
  }
  console.log("WHAT ABOUT NOW:", todos)

  // const handleRandomClick = () => {
  //   const url = `https://dummyjson.com/todos/${randomNumber()}`;
  //   axios.get(url)
  //     .then(response => {
  //       console.log(response.data);
  //       const data = response.data;
  //       setTodos(prev => [...prev, {id: data.id, todo: data.todo, isFinished: false}])
  //     })
  // }

  const todoItems = todos.map((todo) => {
    return (
          <TodoItem 
            key={todo.id} 
            task={todo.todo} 
            isFinished={todo.isFinished} 
            id={todo.id} 
            handleDelete={handleDelete}
          />
        )
  })

  return (
    <div>
      <form>
          <br />
          {/* <input type="text" name="text" value={todo} onChange={handleChange} /> */}
          <TextField
            helperText={error ? "Task cannot be empty." : ""}
            error={error ? true : false}
            id={error ? "outlined-error" : "outlined-basic"}
            label="What task do you want to add?"
            value={todo}
            onChange={handleChange}
            sx={{width:"500px", mb:3}}
          />
        <br />
        {/* <label htmlFor='finished'>Finished?</label>
        <input id="finished" type="checkbox" checked={finished} name="checkbox" onChange={handleChangeCheckbox}/>
        <br /> */}
        {/* <input type="submit" name="submit" onClick={handleClick}/> */}
        <Button variant="outlined" type="submit" onClick={handleClick}>Add Task</Button>
        <br />
      </form>
      {/* <button onClick={handleRandomClick}>Get Random</button> */}
      <div className='todoItem'>{todoItems}</div>
    </div>
  )
}

export default Form