import { useState, useEffect } from "react"
const useFetch = (url) => {
	const [movies, setMovies] = useState([])
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((movies) => {
				setMovies((oldArray) => [...oldArray, ...movies.results])
			})
			.catch((err) => console.log(err))
	}, [url])
	return [movies]
}
export default useFetch
