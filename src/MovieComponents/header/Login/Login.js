import React, { useEffect, useState } from "react"
import "./Login.css"

export const LoginComponent = () => {
	const [state, setState] = useState({})

	// const LINK = `https://api.themoviedb.org/3/authentication/token/new?api_key=${FETCH.key}`
	useEffect(async () => {
		// const test = await getMovies(LINK)
		// console.log(test)
		// console.log(
		// 	`https://www.themoviedb.org/authenticate/${test.request_token}?redirect_to=http://localhost:3000/approved`
		// )
		// console.log(
		// 	`https://api.themoviedb.org/3/authentication/session/new?api_key=${FETCH.key}`
		// )
		// const response = await fetch(
		// 	`https://www.themoviedb.org/authenticate/${test.request_token}`
		// )
		// const result = await response.json()
		// console.log(result)
		// const POST_REQUES = await fetch(
		// 	`https://api.themoviedb.org/3/authentication/session/new?${FETCH.key}`,
		// 	{
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(result),
		// 	}
		// )
		// const post = await POST_REQUES.json()
	}, [])
	return (
		<div className='login-wrapper'>
			<h1>Please Log In</h1>
			<form>
				<label>
					<p>Username</p>
					<input type='text' />
				</label>
				<label>
					<p>Password</p>
					<input type='password' />
				</label>
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	)
}
