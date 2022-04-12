import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'

export default class App extends Component {
	state = {
		todos: [
			{id: '001', name: '吃饭', done: true},
			{id: '002', name: '睡觉', done: true},
			{id: '003', name: '打游戏', done: false},
		]
	}

	addTodo = (todoObj) => {
		const { todos } = this.state
		const newTodos = [todoObj, ...todos]
		this.setState({todos: newTodos})
	}

  render() {
		const { todos } = this.state
    return (
      <div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={todos} />
					<Footer />
				</div>
			</div>
    )
  }
}
