import React from 'react';
import TodoItem from './TodoItem.js';

class TodoMain extends React.Component {
	constructor() {
		super()
	}

	render() {
		if(this.props.todos.length == 0) {
			return (
				<div>恭喜您，目前没有待办任务!</div>
			)
		} else {
			return (
				<ul>
					{
						this.props.todos.map((todo,index) => {
							return <TodoItem key={index} text={todo.text} isDone={todo.isDone} index={index} {...this.props}/>
						})
					}
				</ul>
			)
		}

	}
}

export default TodoMain;
