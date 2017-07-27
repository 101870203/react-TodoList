'use strict'
import React from 'react';
import TodoHeader from './TodoHeader.js';
import TodoMain from './TodoMain.js';
import TodoFooter from './TodoFooter.js';
import style from './style.css';

class App extends React.Component {
	constructor() {
		super();
        this.state = {
            todos:[],
            isAllChecked:false
        }
	}
    // 添加任务，是传递给Header组件的方法
    addTodo(todoItem) {
        this.state.todos.push(todoItem);
        this.setState(this.state.todos);
    }
    // 删除当前的任务，传递给TodoItem的方法
    deleteTodo(index) {
        this.state.todos.splice(index,1);
        this.setState(this.state.todos);
    }
    // 改变任务状态，传递给TodoItem和Footer组件的方法
    changeTodoState(index,isDone,isAllChecked=false) {
        if(isAllChecked) {
            this.setState({
                todos:this.state.todos.map((todo)=>{
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked:isDone
            })
        } else {
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
        this.setState(this.state.todos);
    }
    // 遍历所有元素是否全选
    allChecked() {

        let isAllChecked = false;
        //对数组中每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
        if(this.state.todos.every(todo=>todo.isDone)){
            isAllChecked = true;
        }
        this.setState({
            todos:this.state.todos,
            isAllChecked:isAllChecked
        })
    }

    // 清除已完成任务
    clearDone() {
        //过滤掉数组中todo.isDone为true的item。
         let todos = this.state.todos.filter(todo => !todo.isDone);
         this.setState({
            todos: todos,
            isAllChecked: false
        });
        this.setState(todos);
    }
	render() {
        let info = {
            isAllChecked: this.state.isAllChecked,
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0
        }
		return (
            <div className="todo-wrap">
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                <TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)}/>
                <TodoFooter {...info} changeTodoState={this.changeTodoState.bind(this)}  clearDone={this.clearDone.bind(this)}/>
            </div>
        );
	}
}
export default App;
