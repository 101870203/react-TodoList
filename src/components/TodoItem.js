import React from 'react';

class TodoItem extends React.Component {
	constructor() {
		super()
	}
	 // 鼠标移入事件
	handlerMouseOver() {
		this.nodeLi.style.background = '#eee';
	}
	handlerMouseOut() {
		this.nodeLi.style.background = '#fff';
	}
	//改变任务是否已完成的状态
	handlerChange() {
		let isDone = !this.props.isDone;
		this.props.changeTodoState(this.props.index, isDone);
	}
	// 删除当前任务
	handlerDelete() {
		this.props.deleteTodo(this.props.index);
	}
	render() {
		return(<li ref={node=>{this.nodeLi=node}} onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
			<label>
				<input type='checkbox' checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
				<span>{this.props.text}</span>
			</label>
			{
				" "
			}
			<button ref="delButton" onClick={this.handlerDelete.bind(this)}>删除</button>
		</li>)
	}
}

export default TodoItem;
