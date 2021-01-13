import React,{ FC } from 'react';
import { Todo } from './App';

type Props = {
    todo: Todo;
    deleteTodo: (id: string) => void;
    toggleIsDone: (id:string) => void;
};

const Item:FC<Props> = ({ todo,deleteTodo,toggleIsDone }) => {
    return (
        <li>
            <input onChange={() => toggleIsDone(todo.id)} type="checkbox"/>
            <span 
                style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                {todo.content}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </li>
    );
};

export default Item;