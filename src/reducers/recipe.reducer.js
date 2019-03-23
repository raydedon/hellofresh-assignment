import {FETCH_RECIPE_FAILURE, FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS} from '../actions/action-types';

export function recipes(state = {}, action) {
	let {type, payload} = action;
	switch(type) {
		case FETCH_RECIPE_REQUEST: {
			return {loadingRecipes: true};
		}
		case FETCH_RECIPE_SUCCESS: {
			let {recipes = []} = payload;
			return {recipes, loadingRecipes: false};
		}
		case FETCH_RECIPE_FAILURE: {
			return {loadingRecipes: false};
		}
		default:
			return state;
	}
}