import React, { Component } from 'react';
import characters from './characters.json';

class FilmList extends Component {
	constructor() {
		super();
		this.state = {
			films: characters
		};
	}

	render() {
		return (
			<div>
				{this.state.films.characters.map(film => (
					<FilmDetails key={film.name} film={film} />
				))}
			</div>
		);
	}
}

function FilmDetails({ film }) {
	const { name, url } = film;
	return (
		<div>
			<h2>Name: </h2>
			<p>{name}</p>
			<h2>Films: </h2>
			<p>{url}</p>
		</div>
	);
}

export default FilmList;
