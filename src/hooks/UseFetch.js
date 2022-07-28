import { useState, useEffect } from "react"
export const useFetch = (url) => {
	const [data, setData] = useState([])
	useEffect(async () => {
		try {
			const response = await fetch(url)
			const result = await response.json()
			setData(result)
		} catch (error) {
			console.error(error)
		}
	}, [url])
	window.scrollTo(0, 0)
	return data
}
