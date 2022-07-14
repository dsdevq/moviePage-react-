import React from "react"

export const SearchComponent = ({ searchTerm, handleOnChange }) => {
	return (
		<header className='App-header'>
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
