// import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { GenreComponent } from "./Genres"
import "./Header.css"

export const Header = () => {
	return (
		<header className='App-header'>
			<Link to={"/moviePage-react-/"}>
				<img className='header-logo' src={logo} alt='logo' />
			</Link>
			<div className='nav-container'>
				<Link className='header-item' to={"/moviePage-react-/upcoming/page=1"}>
					Upcoming
				</Link>
				<Link className='header-item' to={"/moviePage-react-/trending/page=1"}>
					Trending
				</Link>
				<Link className='header-item' to={"/moviePage-react-/featured/page=1"}>
					Featured
				</Link>
			</div>
			<GenreComponent />
		</header>
	)
}
