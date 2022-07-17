import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FETCH, getMovies } from "../../App"
import { MovieList } from "../MovieList"

export const Genre = () => {
	let params = useParams()
	const [genreMovies, setGenreMovies] = useState([])
	useEffect(async () => {
		const response = await getMovies(FETCH.genreMovies(params.genreID))
		setGenreMovies(response.results)
	}, [params.genreID])
	return <>{genreMovies && <MovieList movies={genreMovies} />}</>
}
