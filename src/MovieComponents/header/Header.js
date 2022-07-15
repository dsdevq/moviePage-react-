import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { GenreComponent } from "./Genres"
import { SearchComponent } from "./Search"
import "./Header.css"

export const Header = ({ searchTerm, handleOnChange }) => {
	return (
		<header className='App-header'>
			<Link to={"/moviePage-react-"}>
				<img className='header-logo' src={logo} alt='logo' />
			</Link>
			<GenreComponent />
			<SearchComponent
				searchTerm={searchTerm}
				handleOnChange={handleOnChange}
			/>
		</header>
	)
}
