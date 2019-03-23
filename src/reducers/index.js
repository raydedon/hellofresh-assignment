import {combineReducers} from 'redux';

import {recipes} from './recipe.reducer';

const rootReducer = combineReducers({
	recipes
});

export default rootReducer;