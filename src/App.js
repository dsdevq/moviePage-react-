import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MoreDetails } from "./MovieComponents/MoreDetails"
import { Header } from "./MovieComponents/header/Header"
import { Genre } from "./pages/Genre"
import { SearchComponent } from "./MovieComponents/header/Search"
import { MoviePageProvider } from "./context/MoviePageContext"
import { MovieList } from "./MovieComponents/MovieList"
import { MainPage } from "./pages/MainPage"

function App() {
	return (
		<MoviePageProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={"/moviePage-react-/"} element={<MainPage />} />
					<Route
						path={"/moviePage-react-/featured/:pageID"}
						element={<MovieList method='featured' />}
					/>
					<Route
						path='/moviePage-react-/upcoming/:pageID'
						element={<MovieList method='upcoming' />}
					/>
					<Route
						path='/moviePage-react-/trending/:pageID'
						element={<MovieList method='trending' />}
					/>
					{/* When movie clicked */}
					<Route
						path='/moviePage-react-/movies/:movieID/*'
						element={<MoreDetails />}
					/>
					{/* GENRE PAGES */}
					<Route
						path='/moviePage-react-/genres/:genreID/:pageID'
						element={<Genre />}
					/>
					{/* Search results */}
					<Route
						path='/moviePage-react-/search'
						element={<SearchComponent />}
					/>
				</Routes>
			</BrowserRouter>
		</MoviePageProvider>
	)
}

export default App
