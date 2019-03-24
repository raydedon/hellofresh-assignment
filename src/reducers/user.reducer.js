import {SET_FAVOURITE, SELECT_RECIPE} from '../actions/action-types';

export function user(state = {}, action) {
	let {type, payload} = action;
	switch(type) {
		case SET_FAVOURITE: {
			let {id} = payload;
			let {user: {favourites = []}} = state;
			if(favourites.findIndex(id) > -1) return {favourites: favourites.splice(favourites.findIndex(id), 1)};
			else return {...state, favourites: favourites.push(id)};
		}
		case SELECT_RECIPE: {
			let {selectedRecipe} = payload;
			//let {recipes: {recipes = []}} = store.getState();
			// let {recipes: {recipes = []}} = state;
			return {...state, selectedRecipe};
		}
		default:
			return state;
	}
}