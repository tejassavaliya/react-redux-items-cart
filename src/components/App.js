// import React from 'react';
import React from 'react';
import AddItem from '../containers/AddItem';
import ItemList from '../containers/ItemList';
import '../index.css';


const App = () => {
	
	return (
		<div className='app-background'>
			<div className='main-container'>
				<AddItem />
				<ItemList />
			</div>
		</div>
	);
};


export default App;