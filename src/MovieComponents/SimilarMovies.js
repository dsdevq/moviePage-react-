import React from "react"
import { useParams } from "react-router-dom"
import { FETCH } from "../App"
import { useFetch } from "../hooks/UseFetch"
import { MovieList } from "./MovieList"

export const SimilarMovies = () => {
	let params = useParams()
	const similarMovies = useFetch(FETCH.similar(params.movieID))

	return (
		<>
			{similarMovies.results && (
				<>
					<MovieList movies={similarMovies.results} />
					<h1>Similar movies</h1>
				</>
			)}
		</>
	)
}
