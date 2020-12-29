import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todo }) => {
    <div class="li">
         {todo.map(todo => <TodoListItem todo={todo} /> )} 
    </div>
}

export default TodoList;