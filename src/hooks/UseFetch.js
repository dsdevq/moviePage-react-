import { useState, useEffect } from "react"
export const useFetch = (url) => {
	const [data, setData] = useState([])
	useEffect(async () => {
		const response = await fetch(url)
		const result = await response.json()
		setData(result)
	}, [url])
	window.scrollTo(0, 0)
	return data
}
