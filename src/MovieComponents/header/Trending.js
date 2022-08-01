import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useMoviePage } from "../../context/MoviePageContext"
import { useFetch } from "../../hooks/UseFetch"
import { ButtonComponent } from "../Button"
import { MovieList } from "../MovieList"
import "./Header.css"

export const Trending = () => {
	const [page, setPage] = useState(1)
	const { FETCH, pages } = useMoviePage()

	return (
		<>
			<div className='App'>
				<MovieList method='trending' />
			</div>
		</>
	)
}
