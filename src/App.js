import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'
// import Events from './Events'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {

  }
  
  render () {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
      return (
        <div className="todo-item">
          {todoItems}
        </div>
      )
  }
}




export default App

