import React from 'react';
import MainBody from './mainbody/MainBody';
import Header from './Header';
import Footer from './Footer';
import './layout.scss';

const Layout = () => (
	<div className="container">
		<Header />
		<MainBody />
		<Footer />
	</div>
);

export default Layout;