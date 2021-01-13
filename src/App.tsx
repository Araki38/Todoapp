import React,{ FC,useState } from 'react';
import Form from './Form';
import List from './List';
import {nanoid} from "nanoid";

export type Todo = {
    content:string;
    id: string;
    isDone: boolean;
};

const App: FC = () => {
    const [todos,setTodos] = useState<Todo[]>([
        {content: '(例)掃除をする', id: nanoid(), isDone: false },
        {content: '(例)洗濯をする', id: nanoid(), isDone: false },
    ]);

    const addTodo = (text:string) => {
        setTodos([...todos,{content: text, id: nanoid(), isDone: false }]);
    };

    const deleteTodo = (id:string):void => {
        const deletedTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(deletedTodos);
    };

    const toggleIsDone = (id: string) => {
        const toggledTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo,isDone: !todo.isDone}
            }else{
                return todo;
            }    
        })
        setTodos(toggledTodos);
    }

    return (
        <>
            <Form addTodo={addTodo}/>
            <List toggleIsDone={toggleIsDone} todos={todos} deleteTodo={deleteTodo}/>
        </>
    );
};

export default App;