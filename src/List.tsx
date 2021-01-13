import React,{ FC } from 'react';
import Item from './Item';
import { Todo } from './App';

type Props ={
    todos: Todo[]; 
    deleteTodo: (id: string) => void;
    toggleIsDone: (id:string) => void;
};

const List:FC<Props> = ({todos, deleteTodo,toggleIsDone}) => {
    return (
        <>
            {todos.map((todo) => {
                return <Item 
                    toggleIsDone={toggleIsDone}
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                />
            })}
        </>
    );
};

export default List;