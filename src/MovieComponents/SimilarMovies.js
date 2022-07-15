import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovies } from "../App"
import { ButtonComponent } from "./Button"
import Movie from "./Movie"
import { MovieList } from "./MovieList"

const KEY = "api_key=04c35731a5ee918f014970082a0088b1"

export const SimilarMovies = () => {
	const [similarMovies, setSilimarMovies] = useState()
	const [pages, setPages] = useState(1)
	let params = useParams()

	useEffect(() => {
		getMovies(
			`https://api.themoviedb.org/3/movie/${params.movieID}/similar?${KEY}&language=en-US&page=${pages}`
		).then((data) => setSilimarMovies(data.results))
	}, [params.movieID, pages])
	return (
		<>
			{similarMovies && (
				<>
					<ButtonComponent event={() => setPages(pages + 1)} text='Show More' />
					<MovieList movies={similarMovies} />
					<h1>Similar movies</h1>
				</>
			)}
		</>
	)
}
