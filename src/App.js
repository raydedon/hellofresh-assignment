import React from 'react';
import {HashRouter} from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';

const App = () => {
	return (
		<HashRouter>
			<Layout />
		</HashRouter>
	);
};

export default App;
