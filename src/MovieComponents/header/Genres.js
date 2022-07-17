import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FETCH, getMovies } from "../../App"

export const GenreComponent = () => {
	const [genres, setGenres] = useState([])
	const [isOpen, setIsOpen] = useState(false)

	useEffect(async () => {
		const response = await getMovies(FETCH.genreList())
		setGenres(response.genres)
	}, [])

	return (
		<>
			<div
				style={
					isOpen
						? {
								transform: `translateX(0%)`,
						  }
						: {}
				}
				className='genre-container'>
				{genres.length &&
					genres.map((genre) => {
						return (
							<Link
								onClick={() => setIsOpen(!isOpen)}
								className='genre-item'
								to={`/genres/${genre.id}`}
								key={genre.id}>
								{genre.name.toUpperCase()}
							</Link>
						)
					})}
			</div>
			<div onClick={() => setIsOpen(!isOpen)} className='burger-button'>
				GENRES
			</div>
		</>
	)
}
