import React, { useState } from "react"
import { Route, Routes, Switch, useParams } from "react-router-dom"
import { MovieList } from "./MovieList"
// import List from "./search";
// import Lists from "./lists";

const SEARCH_API =
	"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const MoreDetails = () => {
	const [movie, setMovie] = useState({})
	let params = useParams()
	console.log(params)

	let movieInfo = async (API) => {
		const response = await fetch(API + params.movieID)
		const result = await response.json()
		setMovie()
	}

	return (
		<div className='container'>
			<h1>Movie details, movie = {params.title}</h1>
			<Routes></Routes>
		</div>
	)
}

export default MoreDetails
