import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FETCH, pages } from "../App"
import { useFetch } from "../hooks/UseFetch"
import { ButtonComponent } from "../MovieComponents/Button"
import { MovieList } from "../MovieComponents/MovieList"

export const MoviePage = () => {
	const [page, setPage] = useState(1)
	const movies = useFetch(FETCH.featured(page))

	return (
		<div className='App'>
			<MovieList movies={movies.results} link={FETCH.featured} />
			<div className='button-container'>
				{pages &&
					pages.map((page, index) => (
						<Link key={index} to={`/moviePage-react-/page=${index + 1}`}>
							<ButtonComponent event={() => setPage(index + 1)} text={page} />
						</Link>
					))}
			</div>
		</div>
	)
}
