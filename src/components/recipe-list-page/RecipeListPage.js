import React from 'react';
import GenericList from '../generic-list/GenericList';
import RecipeCard from '../recipe-card/RecipeCard';
import {fetchRecipes} from '../../actions/recipe-actions';
import {connect} from 'react-redux';

class RecipeListPage extends React.Component {
	componentDidMount() {
		let {fetchRecipes} = this.props;
		fetchRecipes();
	}

	render() {
		let {recipes = [], loadingRecipes = false} = this.props;
		if(loadingRecipes) return <div>Loading ...</div>;
		return <GenericList list={recipes} ItemComp={RecipeCard} />;
	}
}

const mapStateToProps = ({recipes: {recipes = [], loadingRecipes = false}}) => ({recipes, loadingRecipes});

const mapDispatchToProps = dispatch => ({
	fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListPage);
