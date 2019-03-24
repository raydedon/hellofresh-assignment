import React from 'react';
import GenericList from '../generic-list/GenericList';
import './recipelist.scss';

const RecipeList = ({list = [], itemComp}) => {
	if(list.length === 0) return null;
	return <GenericList list={list} ItemComp={itemComp} className="grid generic-list" />;
};


export default RecipeList;
