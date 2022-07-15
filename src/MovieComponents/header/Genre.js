import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovies } from "../../App"
import { MovieList } from "../MovieList"

export const Genre = () => {
	let params = useParams()
	const [genreMovies, setGenreMovies] = useState([])
	const API =
		"https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&sort_by=popularity.desc&with_genres={genre}&with_watch_monetization_types=free"

	useEffect(() => {
		getMovies(
			`https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&sort_by=popularity.desc&with_genres=${params.genreID}&with_watch_monetization_types=free`
		).then((data) => console.log(data))
	}, [params.genreID])
	// console.log(params.genreID)
	return <>{genreMovies && <MovieList movies={genreMovies} />}</>
}
