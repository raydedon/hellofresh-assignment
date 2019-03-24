import React from 'react';
import {Link} from 'react-router-dom';
import './recipecard.scss';

const RecipeCard = ({id = '', name = '', thumb = '', headline = '', calories = '', time = '', rating = ''}) => (
	<div className="card">
		<Link to={`/recipe/${id}`}>
			<img src={thumb} className="card-img-top" alt={name} />
		</Link>
		<div className="card-body">
			<Link to={`/recipe/${id}`}>
				<h5 className="card-title">{name}</h5>
			</Link>
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
);

export default RecipeCard;