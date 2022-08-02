import "./MoreDetails.css"
import { useParams } from "react-router-dom"
import { ReviewComponent } from "./Review"
import { useFetch } from "../hooks/UseFetch"
import { Loader } from "./Loader"
import { useMoviePage } from "../context/MoviePageContext"
import { MovieList } from "./MovieList"

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return "green"
	} else if (vote >= 6) {
		return "orange"
	} else return "red"
}

export const MoreDetails = () => {
	// Getting id of clicked movie
	let params = useParams()
	const { IMG_API, FETCH } = useMoviePage()
	const selectedMovie = useFetch(FETCH.moreDetails(params.movieID))

	return (
		<div className='more-details'>
			<div className='more-details__container'>
				{selectedMovie ? (
					<>
						{/* //# SIMILAR MOVIEWS */}
						{/* <SimilarMovies /> */}
						<MovieList method={"similar"} id={params.movieID} />
						{/* //# REVIEWS */}
						<div className='review-container'>
							<ReviewComponent />
						</div>
						<aside className='more-details__information information-details'>
							<h1 className='information-details__title'>
								{selectedMovie.title}
							</h1>
							<div className='information-details__genre genre-box'>
								<div className='genre-box__container'>
									{selectedMovie.genres &&
										selectedMovie.genres.map((genre, index) => (
											<p key={index} className='genre-box__item'>
												{genre.name}
											</p>
										))}
								</div>
							</div>
							<p className='information-details__release'>
								Release date: {selectedMovie.release_date}
							</p>
							<p className='information-details__popularity'>
								Popularity: {Math.round(selectedMovie.popularity)}
							</p>
							<p className='information-details__overview'>
								{selectedMovie.overview}
							</p>
							<p className='information-details__language'>
								Original language:
								<span>{selectedMovie.original_language}</span>
							</p>
							<p className='information-details__vote-average '>
								Average vote:
								<span
									className={`tag ${setVoteClass(selectedMovie.vote_average)}`}>
									{selectedMovie.vote_average}
								</span>
							</p>
							<p className='information-details__vote-count'>
								Vote count: {Math.round(selectedMovie.vote_count)}
							</p>
						</aside>
						<aside className='more-details__image'>
							<img
								src={IMG_API(selectedMovie.backdrop_path)}
								alt={selectedMovie.title}
							/>
						</aside>
					</>
				) : (
					<Loader />
				)}
			</div>
		</div>
	)
}
