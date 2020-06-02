import React from 'react';
import TodoListItems from './todo-list-item';

const TodoList = () => {
	return (
		<ul>
			<li><TodoListItems/></li>
			<li><TodoListItems/></li>
			<li><TodoListItems/></li>
		</ul>
	);
};

export default TodoList;