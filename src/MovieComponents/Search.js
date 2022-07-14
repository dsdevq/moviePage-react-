import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export const SearchComponent = ({ searchTerm, handleOnChange }) => {
	return (
		<header className='App-header'>
			<Link to={"/movies"}>
				<img className='header-logo' src={logo} alt='logo' />
			</Link>
			<input
				className='search'
				type='text'
				placeholder='Search...'
				value={searchTerm}
				onChange={handleOnChange}
			/>
		</header>
	)
}
