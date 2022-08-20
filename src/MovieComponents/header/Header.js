// import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ROUTE_PATH } from "../../App"
import logo from "../../assets/logo.png"
import { GenreComponent } from "./Genres"
import "./Header.css"

export const Header = () => {
	return (
		<header className='App-header'>
			<Link to={ROUTE_PATH.mainPage}>
				<img className='header-logo' src={logo} alt='logo' />
			</Link>
			<div className='nav-container'>
				<Link
					className='header-item'
					to={ROUTE_PATH.upcoming.replace(":pageID", "page=1")}>
					Upcoming
				</Link>
				<Link
					className='header-item'
					to={ROUTE_PATH.trending.replace(":pageID", "page=1")}>
					Trending
				</Link>
				<Link
					className='header-item'
					to={ROUTE_PATH.featured.replace(":pageID", "page=1")}>
					Featured
				</Link>
			</div>
			<GenreComponent />
		</header>
	)
}
