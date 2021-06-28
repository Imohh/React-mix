import React from 'react'

function change () {
    console.log("This just changed")
}

function TodoItem(props) {
    return (
        <div className="this-todo">
            <input type="checkbox" 
            onChange={change} 
            checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}


export default TodoItem