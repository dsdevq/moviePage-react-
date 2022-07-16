import React, { useEffect, useState } from "react"
import { getMovies } from "../../../App"
import { KEY } from "../../SimilarMovies"

const LINK = `https://api.themoviedb.org/3/authentication/token/new?${KEY}`

export const LoginComponent = () => {
	const [state, setState] = useState({})

	useEffect(async () => {
		const test = await getMovies(LINK)
		console.log(test)
		const response = await fetch(
			`https://www.themoviedb.org/authenticate/${test.request_token}`
		)
		const result = await response.json()
		console.log(result)
		// const POST_REQUES = await fetch(`https://api.themoviedb.org/3/authentication/session/new?${KEY}`, {
		//   method: 'POST',

		// })
	}, [])
	return <div>LoginComponent</div>
}
