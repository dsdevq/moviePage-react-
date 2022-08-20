import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Movie } from "./Movie"
import { Loader } from "./Loader"
import { ButtonComponent } from "./Button"
import { useFetch } from "../hooks/UseFetch"
import { useMoviePage } from "../context/MoviePageContext"
import { ROUTE_PATH } from "../App"

// # Method, id
export const MovieList = ({ method, id }) => {
	const [page, setPage] = useState(1)
	const { FETCH, pages } = useMoviePage()
	const movies = useFetch(FETCH[method](id ? id : page, page))
	return (
		<>
			<div className='movie-container'>
				{movies.results ? (
					movies.results.map((movie) => (
						<Link
							className='movie-link'
							to={ROUTE_PATH.movie.replace(":movieID/*", movie.id)}
							key={movie.id}>
							<Movie {...movie} />
						</Link>
					))
				) : (
					<Loader />
				)}
			</div>
			{method !== "similar" && (
				<div className='button-container'>
					{pages &&
						pages.map((page, index) => (
							<Link
								key={index}
								to={`/${method}${id ? `/${id}` : ""}/page=${index + 1}`}>
								<ButtonComponent event={() => setPage(index + 1)} text={page} />
							</Link>
						))}
				</div>
			)}
		</>
	)
}
