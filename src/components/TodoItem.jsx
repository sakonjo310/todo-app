import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const TodoItem = (props) => {
  const [finished, setFinished] = useState(props.isFinished);
  console.log("FINAL:", finished)
  const onChangeHandler = () => {
    setFinished(!finished)
  }


  return (
    <div>
      <span className={finished ? "finished" : ""}>{props.task}</span>
      <Checkbox checked={finished} onChange={onChangeHandler}/>
      {/* {finished && <span>Finished</span>} */}
      <IconButton aria-label="delete" onClick={() => props.handleDelete(props.id)}>
        <DeleteIcon />
      </IconButton>
      {/* <button onClick={() => props.handleDelete(props.id)}>Delete</button> */}
    </div>
  )
}

export default TodoItem