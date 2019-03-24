import React from 'react';
import {Switch, Route} from 'react-router';
import NotFoundPage from '../not-found-page/NotFoundPage';
import RecipeListPage from '../recipe-list-page/RecipeListPage';
import RecipePage from '../recipe-page/RecipePage';
import './mainbody.scss';


const MainBody = () => (
	<div className="app-content">
		<Switch>
			<Route exact path="/" component={RecipeListPage} />
			<Route path="/recipe/:id" component={RecipePage} />
			<Route path="*" component={NotFoundPage} />
		</Switch>
	</div>
);

export default MainBody;