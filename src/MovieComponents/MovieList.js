import React from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"
import Movie from "./Movie"

export const MovieList = ({ movies }) => {
	return (
		<div className='movie-container'>
			{movies.length ? (
				movies.map((movie) => (
					<Link
						className='movie-link'
						to={`/movies/${movie.id}`}
						key={movie.id}>
						<Movie {...movie} />
					</Link>
				))
			) : (
				<Loader />
			)}
		</div>
	)
}
