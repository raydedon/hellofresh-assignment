import React, {Component} from 'react';
import './recipepage.scss';
import {selectRecipe} from '../../actions/recipe-actions';
import {connect} from 'react-redux';

class RecipePage extends Component {
	componentDidMount() {
		let {selectRecipe, match} = this.props;
		selectRecipe(match.params.id);
	}

	render() {
		let {
			id = '',
			name = '',
			thumb = '',
			headline = '',
			calories = '',
			carbos,
			fats,
			proteins,
			description,
			difficulty,
			favorites,
			time = '',
			rating = '',
			image,
			ingredients
		} = this.props.selectedRecipe;
		return 	(
			<div className="recipe-detail">
				<div className="recipe-image">
					<img src={image} className="reciepe-detail-img-top" alt={name} />
				</div>
				<div className="recipe-detail-body">
					<div className="recipe-detail-wrapper">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{headline}</p>
						<div className="card-footer">
							<div className="fela-fzx7h2">
								<p className="fela-bnxrld">
									<span className="fela-18emzam">{calories}</span>
									<span>{time}</span>
								</p>
							</div>
							<div className="rating">{rating}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({recipes: {recipes = []}, user: {selectedRecipe = {}}}, ownProps) => ({recipes, selectedRecipe, ...ownProps});

const mapDispatchToProps = dispatch => ({
	selectRecipe: (id) => dispatch(selectRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
