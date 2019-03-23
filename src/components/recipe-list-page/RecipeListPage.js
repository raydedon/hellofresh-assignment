import React from 'react';
import GenericList from '../generic-list/GenericList';
import RecipeCard from '../recipe-card/RecipeCard';

const RecipeListPage = ({list = []}) => {
	if(list.length === 0) return null;
	return <GenericList list={list} ItemComp={RecipeCard} />;
};

export default RecipeListPage;
