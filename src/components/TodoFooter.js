import React from 'react';

class TodoFooter extends React.Component {
	constructor() {
		super();
	}
	//删除全部已完成任务
	handlerDeleteDone() {
		this.props.clearDone();
	}
	//改变任务是否已完成的状态
	handlerSelectAll(e) {
		this.props.changeTodoState(null,e.target.checked,true);
	}
	render() {
		return(
			<div>
				<label>
					<input type="checkbox" checked={this.props.isAllChecked} onChange={this.handlerSelectAll.bind(this)}/>全选
				</label>
				{
					" "
				}
				<span>已完成{this.props.todoDoneCount} / 全部{this.props.todoCount}</span>
				{
					" "
				}
				<button onClick={this.handlerDeleteDone.bind(this)}>清楚已完成任务</button>
			</div>
		)
	}
}

export default TodoFooter;
