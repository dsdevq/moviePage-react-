import React from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"
import Movie from "./Movie"

export const MovieList = ({ movies }) => {
	return (
		<div className='movie-container'>
			{movies.length > 0 ? (
				movies.map((movie) => (
					<Link to={`/movies/${movie.id}`} key={movie.id}>
						<Movie {...movie} />
					</Link>
				))
			) : (
				<Loader />
			)}
		</div>
	)
}
