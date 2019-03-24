import {FETCH_RECIPE_FAILURE, FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS, SET_FAVOURITE} from '../actions/action-types';

export function recipes(state = {}, action) {
	let {type, payload} = action;
	switch(type) {
		case FETCH_RECIPE_REQUEST: {
			return {...state, loadingRecipes: true};
		}
		case FETCH_RECIPE_SUCCESS: {
			let {recipes = []} = payload;
			return {...state, recipes, loadingRecipes: false};
		}
		case FETCH_RECIPE_FAILURE: {
			return {...state, loadingRecipes: false};
		}
		case SET_FAVOURITE: {
			let {id} = payload;
			let {recipes = []} = payload;
			return {
				...state,
				recipes: recipes.map(r => {
					if(r.id !== id) return r;
					let {favourite = false} = r;
					return {...r, favourite: !favourite};
				})
			};
		}
		default:
			return state;
	}
}