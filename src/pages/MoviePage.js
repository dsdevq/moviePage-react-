import React from "react"
import { ButtonComponent } from "../MovieComponents/Button"
import { MovieList } from "../MovieComponents/MovieList"

export const MoviePage = ({ movies, setPage, page }) => {
	return (
		<div className='App'>
			<MovieList movies={movies} />
			<ButtonComponent event={() => setPage(page + 1)} text='Show More' />
		</div>
	)
}
