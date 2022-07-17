import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FETCH, getMovies } from "../App"
import { MovieList } from "./MovieList"

export const SimilarMovies = () => {
	const [similarMovies, setSilimarMovies] = useState()
	let params = useParams()

	useEffect(async () => {
		const response = await getMovies(FETCH.similar(params.movieID))
		setSilimarMovies(response.results)
	}, [params.movieID])
	return (
		<>
			{similarMovies && (
				<>
					<MovieList movies={similarMovies} />
					<h1>Similar movies</h1>
				</>
			)}
		</>
	)
}
