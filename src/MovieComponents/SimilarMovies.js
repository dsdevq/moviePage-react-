import React from "react"
import { useParams } from "react-router-dom"
import { useMoviePage } from "../context/MoviePageContext"
import { useFetch } from "../hooks/UseFetch"
import { MovieList } from "./MovieList"

export const SimilarMovies = () => {
	let params = useParams()
	const { FETCH } = useMoviePage()
	const similarMovies = useFetch(FETCH.similar(params.movieID))

	return (
		<>
			<MovieList method={"similar"} />
			<h1>Similar movies</h1>
		</>
	)
}
