import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {v1 as uuid} from 'uuid';
import { addTodo } from '../redux/actions'

function ToDoInput() {
    let [name, setName] = useState();
    const dispatch = useDispatch()
    return (
        <>
         <div className='row m-2'>
         <input 
         type='text' 
         onChange={(e) => setName(e.target.value)}
         value={name}
         className='col form-control'/>
         <button 
         onClick={()=>{
             dispatch(addTodo(
                 {id:uuid(), name: name}
                 ))
            setName('')
         }}
         className='btn btn-primary mx-2'>Add</button>
         </div>   
        </>
    )
}

export default ToDoInput
