import React, { createContext, useContext } from "react"

const MoviePageContext = createContext({})

export function useMoviePage() {
	return useContext(MoviePageContext)
}

const IMG_API = (image) => image && `https://image.tmdb.org/t/p/w1280${image}`

const FETCH = {
	key: "04c35731a5ee918f014970082a0088b1",
	link: "https://api.themoviedb.org/3",
	search: function (value) {
		return `${this.link}/search/movie?&api_key=${this.key}&query=${value}`
	},
	//! FETCHING MOVIE LIST
	featured: function (page) {
		return `${this.link}/discover/movie?sort_by=popularity.desc&api_key=${this.key}&page=${page}`
	},
	// *
	genres: function (genreID, page) {
		return `${this.link}/discover/movie?api_key=${this.key}&sort_by=popularity.desc&with_genres=${genreID}&page=${page}`
	},
	similar: function (movieID, page) {
		return `${this.link}/movie/${movieID}/similar?&api_key=${this.key}&page=${page}`
	},
	// *
	trending: function (page) {
		return `${this.link}/trending/movie/day?api_key=${this.key}&page=${page}`
	},
	upcoming: function (page) {
		return `${this.link}/movie/upcoming?api_key=${this.key}&page=${page}`
	},
	// !!!!!!!!!!!!!
	genresList: function () {
		return `${this.link}/genre/movie/list?api_key=${this.key}`
	},
	moreDetails: function (movieID) {
		return `${this.link}/movie/${movieID}?api_key=${this.key}`
	},
	reviews: function (movieID) {
		return `${this.link}/movie/${movieID}/reviews?api_key=${this.key}`
	},
}

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function MoviePageProvider({ children }) {
	return (
		<MoviePageContext.Provider
			value={{
				FETCH,
				pages,
				IMG_API,
			}}>
			{children}
		</MoviePageContext.Provider>
	)
}
