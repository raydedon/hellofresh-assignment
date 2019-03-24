import React from 'react';
import logo from '../logo.svg';
import './header.scss';
import {Link} from 'react-router-dom';

const Header = () => (
	<div className="App">
		<header className="App-header">
			<Link to="/">
				<img src={logo} className="App-logo" alt="logo" />
			</Link>
		</header>
	</div>
);

export default Header;