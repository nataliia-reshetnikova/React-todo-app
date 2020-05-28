import React from 'react';
import { PropTypes } from 'prop-types';

function TodoItem({todo, index, onChange}){
    const classes = [];
    if(todo.completed){
        classes.push('done');
    }
    return(
        <li >
            <span className={classes.join(" ")}>
                <input type="checkbox" onChange={()=>onChange(todo.id)}/>
                &nbsp;
                <strong>{index+1}.</strong>
                &nbsp;{todo.description}
            </span>
            &nbsp;<button type="submit">x</button>
        </li>
    );
}
TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default TodoItem;