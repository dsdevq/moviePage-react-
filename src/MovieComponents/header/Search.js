import React from "react"

export const SearchComponent = ({ searchTerm, handleOnChange }) => {
	// const [searchTerm, setSearchTerm] = useState("")
	// const debouncedSearchTerm = useDebounce(searchTerm, 500)

	// const handleOnChange = (event) => {
	// 	setSearchTerm(event.target.value)
	// }

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
