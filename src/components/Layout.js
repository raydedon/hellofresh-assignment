import React from 'react';
import MainBody from './mainbody/MainBody';
import Header from './Header';

const Layout = () => (
	<div className="container">
		<Header />
		<MainBody />
		<footer>
			<p>This is a demo app to showcase <strong>React</strong> &amp; <strong>Express</strong> with <strong>react-router-4</strong>.</p>
		</footer>
	</div>
);


export default Layout;