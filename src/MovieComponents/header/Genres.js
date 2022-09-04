import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ROUTE_PATH } from "../../App"
import { useMoviePage } from "../../context/MoviePageContext"
import { useFetch } from "../../hooks/UseFetch"

export const GenreComponent = () => {
	const { FETCH } = useMoviePage()
	const { genres } = useFetch(FETCH.genresList())
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div
				style={{
					transform: `translateX(${!isOpen ? "-200%" : "0%"})`,
				}}
				className='genre-container'>
				{genres &&
					genres.map(({ id, name }) => {
						return (
							<Link
								onClick={() => setIsOpen(!isOpen)}
								className='genre-item'
								to={ROUTE_PATH.genre.replace(
									":genreID/:pageID",
									`${id}/page=1`
								)}
								key={id}>
								{name.toUpperCase()}
							</Link>
						)
					})}
			</div>
			<div onClick={() => setIsOpen(!isOpen)} className='header-item'>
				{!isOpen ? "GENRES" : "CLOSE X"}
			</div>
		</>
	)
}
