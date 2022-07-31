import React, { useState } from "react"
import { FETCH, pages } from "../../App"
import "./Header.css"
import { MovieList } from "../MovieList"
import { useFetch } from "../../hooks/UseFetch"
import { ButtonComponent } from "../Button"
import { Link } from "react-router-dom"

export const Upcoming = () => {
	const [page, setPage] = useState(1)
	const upcomingMovies = useFetch(FETCH.upcoming(page))

	return (
		<div className='App'>
			{upcomingMovies.dates && (
				<>
					<MovieList movies={upcomingMovies.results} />
					<div className='button-container'>
						{pages &&
							pages.map((page, index) => (
								<Link
									key={index}
									to={`/moviePage-react-/upcoming/page=${index + 1}`}>
									<ButtonComponent
										event={() => setPage(index + 1)}
										text={page}
									/>
								</Link>
							))}
					</div>
				</>
			)}
		</div>
	)
}
