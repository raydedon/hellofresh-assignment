import React from 'react';
import GenericList from '../GenericList';

const RecipeList = ({list = [], itemComp}) => {
	if(list.length === 0) return null;
	return <GenericList list={list} ItemComp={itemComp} />;
};


export default RecipeList;
