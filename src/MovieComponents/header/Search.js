import React, { useState } from "react"

export const SearchComponent = () => {
	const [searchTerm, setSearchTerm] = useState("")

	const handleOnChange = (event) => {
		setSearchTerm(event.target.value)
	}

	const handleOnSubmit = (event) => {
		event.preventDefault()
		setSearchTerm("")
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<input
				className='search'
				type='text'
				placeholder='Search...'
				value={searchTerm}
				onChange={handleOnChange}
			/>
			<input type='submit' value='Search' />
		</form>
	)
}
