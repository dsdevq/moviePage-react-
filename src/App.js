import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import useDebounce from "./hooks/UseDebouce"
import MoreDetails from "./MovieComponents/MoreDetails"
import { MoviePage } from "./pages/MoviePage"
import { Header } from "./MovieComponents/header/Header"
import { Genre } from "./MovieComponents/header/Genre"

export const IMG_API = (image) => `https://image.tmdb.org/t/p/w1280${image}`

export const FETCH = {
	key: "04c35731a5ee918f014970082a0088b1",
	search: function (value) {
		return `https://api.themoviedb.org/3/search/movie?&api_key=${this.key}&query=${value}`
	},
	featured: function (page) {
		return `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.key}&page=${page}`
	},
	genreList: function () {
		return `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}`
	},
	genreMovies: function (genreID) {
		return `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&sort_by=popularity.desc&with_genres=${genreID}`
	},
	moreDetails: function (movieID) {
		return `https://api.themoviedb.org/3/movie/${movieID}?api_key=${this.key}`
	},
	similar: function (movieID) {
		return `https://api.themoviedb.org/3/movie/${movieID}/similar?&api_key=${this.key}`
	},
	reviews: function (movieID) {
		return `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${this.key}`
	},
}

export const getMovies = async (API) => {
	const response = await fetch(API)
	const result = await response.json()
	return await result
}

function App() {
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(1)

	const [searchTerm, setSearchTerm] = useState("")
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	useEffect(async () => {
		if (debouncedSearchTerm) {
			const response = await getMovies(FETCH.search(debouncedSearchTerm))
			setMovies(response.results)
		} else {
			const response = await getMovies(FETCH.featured(page))
			setMovies((oldArray) => [...oldArray, ...response.results])
		}
	}, [debouncedSearchTerm, page])

	const handleOnChange = (event) => {
		setSearchTerm(event.target.value)
	}

	return (
		<BrowserRouter>
			<Header searchTerm={searchTerm} handleOnChange={handleOnChange} />
			<Routes>
				<Route
					path={"/moviePage-react-"}
					element={<MoviePage movies={movies} setPage={setPage} page={page} />}
				/>
				<Route path='/movies/:movieID/*' element={<MoreDetails />} />
				<Route path='/genres/:genreID' element={<Genre />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
