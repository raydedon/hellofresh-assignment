import {FETCH_RECIPE_FAILURE, FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS} from './action-types';
import {recipeService} from '../services/recipe.service';

export function fetchRecipes() {
	const request = () => ({type: FETCH_RECIPE_REQUEST, payload: {recipes: []}});
	const success = (recipes) =>  ({type: FETCH_RECIPE_SUCCESS, payload: {recipes}});
	const failure = (error) => ({type: FETCH_RECIPE_FAILURE, payload: {error}});

	return dispatch => {
		dispatch(request());

		recipeService.fetchRecipes()
			.then(
				recipes => dispatch(success(recipes)),
				error => dispatch(failure(error))
			);
	};
}
