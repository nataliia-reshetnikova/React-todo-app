import React, { useContext }from 'react';
import { PropTypes } from 'prop-types';
import Context from './../context';

function TodoItem({todo, index, onChange, onClicked}){
    const {removeTodo} = useContext(Context);
    const classes = [];
    if(todo.completed){
        classes.push('done');
    }
    return(
        <li >
            <span className={classes.join(' ')}>
                <input type="checkbox" checked={todo.completed} onChange={()=>onChange(todo.id)}/>
                &nbsp;
                <strong>{index+1}.</strong>
                &nbsp;{todo.description}
            </span>
            &nbsp;<button type="submit" onClick={()=>removeTodo(todo.id)}>x</button>
        </li>
    );
}
TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default TodoItem;