import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMovies } from "../../App"

export const GenreComponent = () => {
	const [genres, setGenres] = useState([])

	useEffect(() => {
		getMovies(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1"
		).then((data) => setGenres(data.genres))
	}, [])

	return (
		<div className='genre-container'>
			{genres.length &&
				genres.map((genre) => {
					return (
						<Link
							className='genre-item'
							to={`/genres/${genre.name.toLowerCase()}`}
							key={genre.id}>
							{genre.name.toUpperCase()}
						</Link>
					)
				})}
		</div>
	)
}
