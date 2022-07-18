import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { MoreDetails } from "./MovieComponents/MoreDetails"
import { MoviePage } from "./pages/MoviePage"
import { Header } from "./MovieComponents/header/Header"
import { Genre } from "./MovieComponents/header/Genre"
import { LoginComponent } from "./MovieComponents/header/Login/Login"
import { Upcoming } from "./MovieComponents/header/Upcoming"
import { Trending } from "./MovieComponents/header/Trending"
import { SearchComponent } from "./MovieComponents/header/Search"

export const IMG_API = (image) => `https://image.tmdb.org/t/p/w1280${image}`

export const FETCH = {
	key: "04c35731a5ee918f014970082a0088b1",
	link: "https://api.themoviedb.org/3",
	page: 1,
	search: function (value) {
		return `${this.link}/search/movie?&api_key=${this.key}&query=${value}`
	},
	//! FETCHING MOVIE LIST
	featured: function (page) {
		return `${this.link}/discover/movie?sort_by=popularity.desc&api_key=${this.key}&page=${page}`
	},
	// *
	genreMovies: function (genreID, page) {
		return `${this.link}/discover/movie?api_key=${this.key}&sort_by=popularity.desc&with_genres=${genreID}&page=${page}`
	},
	similar: function (movieID) {
		return `${this.link}/movie/${movieID}/similar?&api_key=${this.key}&page=${this.page}`
	},
	// *
	trending: function (page) {
		return `${this.link}/trending/movie/day?api_key=${this.key}&page=${page}`
	},
	upcoming: function (page) {
		return `${this.link}/movie/upcoming?api_key=${this.key}&page=${page}`
	},
	// !!!!!!!!!!!!!
	genreList: function () {
		return `${this.link}/genre/movie/list?api_key=${this.key}`
	},
	moreDetails: function (movieID) {
		return `${this.link}/movie/${movieID}?api_key=${this.key}`
	},
	reviews: function (movieID) {
		return `${this.link}/movie/${movieID}/reviews?api_key=${this.key}`
	},
}

export const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				{/* Default page */}
				<Route path={"/moviePage-react-/:pageID"} element={<MoviePage />} />
				{/* When movie clicked */}
				<Route
					path='/moviePage-react-/movies/:movieID/*'
					element={<MoreDetails />}
				/>
				{/* When genre is choosen */}
				<Route path='/moviePage-react-/genres/:genreID/' element={<Genre />} />
				{/* GENRE PAGES */}
				<Route
					path='/moviePage-react-/genres/:genreID/:pageID'
					element={<Genre />}
				/>
				{/* Login page */}
				<Route path='/moviePage-react-/login' element={<LoginComponent />} />
				{/* When upcoming movies choosen */}
				<Route path='/moviePage-react-/upcoming' element={<Upcoming />} />
				<Route
					path='/moviePage-react-/upcoming/:pageID'
					element={<Upcoming />}
				/>
				{/* When trending movies choosen */}
				<Route path='/moviePage-react-/trending' element={<Trending />} />
				{/* Trending pages */}
				<Route
					path='/moviePage-react-/trending/:pageID'
					element={<Trending />}
				/>
				{/* Search results */}
				<Route path='/moviePage-react-/search' element={<SearchComponent />} />
				//! FIX
				{/* Default path  */}
				<Route
					path='*'
					element={<Navigate to='/moviePage-react-/page=1' replace />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
