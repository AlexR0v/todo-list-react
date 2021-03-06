import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import React from 'react';

import './app.css'

const App = () => {

	const todoData = [
		{ label: 'Выпить кофе', important: false, id: 1 },
		{ label: 'Изучить React', important: true, id: 2 },
		{ label: 'Написать крутое приложение', important: false, id: 3 }
	];

	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
			</div>

			<TodoList todos={todoData} />
		</div>
	);
};

export default App;