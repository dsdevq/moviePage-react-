import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import useDebounce from "./hooks/UseDebouce"
import { ButtonComponent } from "./MovieComponents/Button"
import { MovieList } from "./MovieComponents/MovieList"
import MoreDetails from "./MovieComponents/MoreDetails"
import { SearchComponent } from "./MovieComponents/Search"

const SEARCH_API =
	"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const FEATURED_API =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="

function App() {
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(1)

	const [searchTerm, setSearchTerm] = useState("")
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	useEffect(() => {
		if (debouncedSearchTerm) {
			getMovies(SEARCH_API + debouncedSearchTerm).then((result) => {
				setMovies(result.results)
			})
		} else {
			getMovies(FEATURED_API + page).then((result) =>
				setMovies((oldArray) => [...oldArray, ...result.results])
			)
		}
	}, [debouncedSearchTerm, page])

	const getMovies = async (API) => {
		const response = await fetch(API)
		const result = await response.json()
		console.log(result)
		return result
	}

	const handleOnChange = (event) => {
		setSearchTerm(event.target.value)
	}

	return (
		<div className='App'>
			<SearchComponent
				searchTerm={searchTerm}
				handleOnChange={handleOnChange}
			/>
			<MovieList movies={movies} />
			<ButtonComponent event={() => setPage(page + 1)} text='Show More' />
		</div>
	)
}

export default App
