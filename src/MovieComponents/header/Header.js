import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { GenreComponent } from "./Genres"
import "./Header.css"

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className='App-header'>
			<Link to={"/moviePage-react-/"}>
				<img className='header-logo' src={logo} alt='logo' />
			</Link>
			<div className='nav-container'>
				<Link
					onClick={() => setIsOpen(false)}
					className='header-item'
					to={"/moviePage-react-/upcoming/page=1"}>
					Upcoming
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					className='header-item'
					to={"/moviePage-react-/trending/page=1"}>
					Trending
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					className='header-item'
					to={"/moviePage-react-/featured/page=1"}>
					Featured
				</Link>
			</div>
			<GenreComponent />

			{/* <div
				className={isOpen ? "menu-btn open" : "menu-btn"}
				onClick={() => setIsOpen(!isOpen)}>
				<div className='menu-btn__burger'></div>
			</div>

			<div
				style={
					isOpen
						? {
								display: "flex",
								transform: "translateY(0%)",
						  }
						: {
								transform: "translateY(-300%)",
						  }
				}
				className='header-space'>
				<div className='nav-container'>
					<GenreComponent />
					<Link
						onClick={() => setIsOpen(false)}
						className='header-item'
						to={"/moviePage-react-/upcoming/page=1"}>
						Upcoming
					</Link>
					<Link
						onClick={() => setIsOpen(false)}
						className='header-item'
						to={"/moviePage-react-/trending/page=1"}>
						Trending
					</Link>
					<Link
						onClick={() => setIsOpen(false)}
						className='header-item'
						to={"/moviePage-react-/featured/page=1"}>
						Featured
					</Link>
				</div>
			</div> */}
		</header>
	)
}
