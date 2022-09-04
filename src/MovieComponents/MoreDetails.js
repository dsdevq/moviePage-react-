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
	let { movieID } = useParams()
	const { IMG_API, FETCH } = useMoviePage()
	const {
		title,
		genres,
		backdrop_path,
		release_date,
		popularity,
		overview,
		original_language,
		vote_average,
		vote_count,
	} = useFetch(FETCH.moreDetails(movieID))

	return (
		<div className='more-details'>
			<div className='more-details__container'>
				{genres ? (
					<>
						{/* //# SIMILAR MOVIEWS */}
						<MovieList method={"similar"} id={movieID} />
						{/* //# REVIEWS */}
						<div className='review-container'>
							<ReviewComponent />
						</div>
						<aside className='more-details__information information-details'>
							<h1 className='information-details__title'>{title}</h1>
							<div className='information-details__genre genre-box'>
								<div className='genre-box__container'>
									{genres &&
										genres.map(({ name }, index) => (
											<p key={index} className='genre-box__item'>
												{name}
											</p>
										))}
								</div>
							</div>
							<p className='information-details__release'>
								Release date: {release_date}
							</p>
							<p className='information-details__popularity'>
								Popularity: {Math.round(popularity)}
							</p>
							<p className='information-details__overview'>{overview}</p>
							<p className='information-details__language'>
								Original language:
								<span>{original_language}</span>
							</p>
							<p className='information-details__vote-average '>
								Average vote:
								<span className={`tag ${setVoteClass(vote_average)}`}>
									{vote_average}
								</span>
							</p>
							<p className='information-details__vote-count'>
								Vote count: {Math.round(vote_count)}
							</p>
						</aside>
						<aside className='more-details__image'>
							<img src={IMG_API(backdrop_path)} alt={title} />
						</aside>
					</>
				) : (
					<Loader />
				)}
			</div>
		</div>
	)
}
