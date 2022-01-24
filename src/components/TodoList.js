import React from 'react'
import Todos from './Todos'


function TodoList({todos}) {
    return (
        <div>
          <h1>TODO List</h1>  
          
        {todos.map( (el) => 
        <Todos  task = {el.text} key={el.id}     />
          
         )} 

        </div>
    )
}

export default TodoList
