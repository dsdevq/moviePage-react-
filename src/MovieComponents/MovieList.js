import React from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import MoreDetails from "./MoreDetails"
import Movie from "./Movie"

export const MovieList = ({ movies }) => {
	return (
		<div className='movie-container'>
			{movies.length > 0 &&
				movies.map((movie) => (
					<Link to={`/movies/${movie.id}`} key={movie.id}>
						<Movie {...movie} />
					</Link>
				))}
		</div>
	)
}
