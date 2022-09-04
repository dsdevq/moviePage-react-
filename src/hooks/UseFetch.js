import { useState, useEffect } from "react"
export const useFetch = (url) => {
	const [data, setData] = useState([])
	useEffect(() => {
		let controller = new AbortController()
		;(async () => {
			try {
				const response = await fetch(url, {
					signal: controller.signal,
				})
				const result = await response.json()
				setData(result)
			} catch (error) {
				console.error(error)
			}
		})()
		return () => {
			controller?.abort()
			// window.scrollTo(0, 0)
		}
	}, [url])
	return data
}
