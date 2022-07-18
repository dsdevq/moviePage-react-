import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FETCH, pages } from "../../App"
import { useFetch } from "../../hooks/UseFetch"
import { ButtonComponent } from "../Button"
import { MovieList } from "../MovieList"
import "./Header.css"

export const Trending = () => {
	const [page, setPage] = useState(1)
	const trending = useFetch(FETCH.trending(page))

	return (
		<>
			{trending && (
				<div className='App'>
					<div className='trending-container'>
						<h1>Trending movies</h1>
					</div>
					<MovieList movies={trending.results} />
					<div className='button-container'>
						{pages &&
							pages.map((page, index) => (
								<Link
									key={index}
									to={`/moviePage-react-/trending/page=${index + 1}`}>
									<ButtonComponent
										event={() => setPage(index + 1)}
										text={page}
									/>
								</Link>
							))}
					</div>
				</div>
			)}
		</>
	)
}
