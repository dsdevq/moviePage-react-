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
import { MoviePageProvider } from "./context/MoviePageContext"

function App() {
	return (
		<MoviePageProvider>
			<BrowserRouter>
				<Header />

				<Routes>
					{/* Default page */}
					{/* <Route path={"/moviePage-react-/featured/"} element={<MoviePage />} /> */}
					<Route
						path={"/moviePage-react-/featured/:pageID"}
						element={<MoviePage />}
					/>
					{/* When movie clicked */}
					<Route
						path='/moviePage-react-/movies/:movieID/*'
						element={<MoreDetails />}
					/>
					{/* When genre is choosen */}
					<Route
						path='/moviePage-react-/genres/:genreID/'
						element={<Genre />}
					/>
					{/* GENRE PAGES */}
					<Route
						path='/moviePage-react-/genres/:genreID/:pageID'
						element={<Genre />}
					/>
					{/* Login page */}
					<Route path='/moviePage-react-/login' element={<LoginComponent />} />
					{/* When upcoming movies choosen */}
					{/* <Route path='/moviePage-react-/upcoming' element={<Upcoming />} /> */}
					<Route
						path='/moviePage-react-/upcoming/:pageID'
						element={<Upcoming />}
					/>
					{/* When trending movies choosen */}
					{/* <Route path='/moviePage-react-/trending' element={<Trending />} /> */}
					{/* Trending pages */}
					<Route
						path='/moviePage-react-/trending/:pageID'
						element={<Trending />}
					/>
					{/* Search results */}
					<Route
						path='/moviePage-react-/search'
						element={<SearchComponent />}
					/>
					//! FIX
					{/* Default path  */}
					{/* <Route
						path='*'
						element={<Navigate to='/moviePage-react-/page=1' replace />}
					/> */}
				</Routes>
			</BrowserRouter>
		</MoviePageProvider>
	)
}

export default App
