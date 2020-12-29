import React from 'react'
import { Card, CardHeader } from '@material-ui/core'


const TodoListItem = ({todo}) =>{
    <Card>
        <CardHeader>
           {todo.text}
        </CardHeader>
    </Card>
}




export default TodoListItem;