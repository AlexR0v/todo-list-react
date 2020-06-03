import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
	const searchText = 'Поиск..';
	return (<input className='search-input' placeholder={searchText}/>);
};

export default SearchPanel;