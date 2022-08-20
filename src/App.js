import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MoreDetails } from "./MovieComponents/MoreDetails"
import { Header } from "./MovieComponents/header/Header"
import { Genre } from "./pages/Genre"
import { SearchComponent } from "./MovieComponents/header/Search"
import { MoviePageProvider } from "./context/MoviePageContext"
import { MovieList } from "./MovieComponents/MovieList"
import { MainPage } from "./pages/MainPage"

export const ROUTE_PATH = {
	mainPage: "/",
	featured: "/featured/:pageID",
	upcoming: "/upcoming/:pageID",
	trending: "/trending/:pageID",
	movie: "/movies/:movieID/*",
	genre: "/genres/:genreID/:pageID",
	search: "/search",
}

function App() {
	return (
		<MoviePageProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={ROUTE_PATH.mainPage} element={<MainPage />} />
					<Route
						path={ROUTE_PATH.featured}
						element={<MovieList method='featured' />}
					/>
					<Route
						path={ROUTE_PATH.upcoming}
						element={<MovieList method='upcoming' />}
					/>
					<Route
						path={ROUTE_PATH.trending}
						element={<MovieList method='trending' />}
					/>
					{/* When movie clicked */}
					<Route path={ROUTE_PATH.movie} element={<MoreDetails />} />
					{/* GENRE PAGES */}
					<Route path={ROUTE_PATH.genre} element={<Genre />} />
					{/* Search results */}
					<Route path={ROUTE_PATH.search} element={<SearchComponent />} />
				</Routes>
			</BrowserRouter>
		</MoviePageProvider>
	)
}

export default App
