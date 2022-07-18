import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Movie } from "./Movie"
import { Loader } from "./Loader"
import { ButtonComponent } from "./Button"
// Share as prop fetch url
export const MovieList = ({ movies }) => {
	useEffect(async () => {}, [])

	// Component should render array data by himself, using shared link
	// const [movies, setMovies] = useState([])
	// const [page, setPage] = useState(1)

	// useEffect(async () => {
	// 	const response = await getMovies(FETCH.featured(page))
	// 	setMovies((oldArray) => [...oldArray, ...response.results])
	// }, [page])

	return (
		<>
			<div className='movie-container'>
				{movies ? (
					movies.map((movie) => (
						<Link
							className='movie-link'
							to={`/moviePage-react-/movies/${movie.id}`}
							key={movie.id}>
							<Movie {...movie} />
						</Link>
					))
				) : (
					<Loader />
				)}
			</div>
		</>
	)
}
