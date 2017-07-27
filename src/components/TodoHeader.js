import React from 'react';

class TodoHeader extends React.Component {
	constructor() {
		super()
	}
	handlerKeyUp(e) {
		if(e.keyCode == 13) {
			let value = e.target.value;
			if(!value) return false;
			let newTodoItem = {
				text:value,
				isDone:false
			};
			e.target.value = '';
			//调用父组件方法
			this.props.addTodo(newTodoItem);
		}
	}
	render() {
		return (
			<div>
				<input type="text" onKeyUp={this.handlerKeyUp.bind(this)} placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}

export default TodoHeader;
