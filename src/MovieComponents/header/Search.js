import React from "react"

export const SearchComponent = ({ searchTerm, handleOnChange }) => {
	return (
		<input
			className='search'
			type='text'
			placeholder='Search...'
			value={searchTerm}
			onChange={handleOnChange}
		/>
	)
}
