import React, { FC,useState } from 'react';

type Props = {
    addTodo: (text: string) => void;
} ;


const Form: FC<Props> = ({addTodo}) => {
    const [text,setText] = useState('');
    
    const hundleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim().length === 0){
            alert('文字を入力してください');
            return;
        }
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={hundleSubmit}>
            <input 
                value={text}
                onChange={(e) => setText(e.target.value)}/>
            <button>送信</button>
        
        </form>
    );   
};

export default Form;