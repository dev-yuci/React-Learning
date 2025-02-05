import React, { useState } from 'react'
import { IoIosRemoveCircle } from 'react-icons/io'
import { FaEdit} from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import '../App.css'

function Todo({todo, onRemoveTodo, onUpdateTodo}) {

  const {id, content} = todo; /* Object distraction*/

  const [editTable, setEditTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo
    }
    onUpdateTodo(request);
    setEditTable(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid lightgray', padding: '10px', borderRadius: '5px', marginBottom: '10px'}}>
      <div>
        {
          editTable ? <input className='todo-input' type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/> : content
        }
      </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo}/>
        {
          editTable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <FaEdit className='todo-icons' onClick={() => setEditTable(true)} />
        }
      </div>
    </div>
  )
}

export default Todo
