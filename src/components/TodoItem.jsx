import React, { useState } from 'react'

const TodoItem = (props) => {
  const [finished, setFinished] = useState(props.finished);
  console.log("FINAL:", finished)
  const onChangeHandler = () => {
    setFinished(!finished)
  }

  const HandleClick = (id) => {
    props.handleDelete(id)
  }

  return (
    <div>
      <span className={finished ? "finished" : ""}>{props.task}</span>
      <input type="checkbox" checked={finished} onChange={onChangeHandler}/>
      {/* {finished && <span>Finished</span>} */}
      <button onClick={() => HandleClick(props.id)}>Delete</button>
    </div>
  )
}

export default TodoItem