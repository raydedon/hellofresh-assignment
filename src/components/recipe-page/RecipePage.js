import React from 'react';

const RecipePage = ({
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
}) => (
	<div className="card">
		<img src={thumb} className="card-img-top" alt={name} />
		<div className="card-body">
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
);

export default RecipePage;