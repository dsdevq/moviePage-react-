import React, { useEffect, useState } from "react"
import "./MoreDetails.css"
import { useParams } from "react-router-dom"
import { SimilarMovies } from "./SimilarMovies"
import { FETCH, getMovies, IMG_API } from "../App"
import { Review } from "./Review"

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return "green"
	} else if (vote >= 6) {
		return "orange"
	} else return "red"
}

const MoreDetails = () => {
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [review, setReview] = useState({})
	// Getting id of clicked movie
	let params = useParams()

	useEffect(async () => {
		const result = await getMovies(FETCH.moreDetails(params.movieID))
		const reviews = await getMovies(FETCH.reviews(params.movieID))
		setReview(reviews.results)
		setSelectedMovie(result)
	}, [params.movieID])

	return (
		<div className='more-details'>
			<div className='more-details__container'>
				{selectedMovie && (
					<>
						<SimilarMovies />
						<div className='review-container'>
							{review.length ? (
								review.map((review) => <Review key={review.id} {...review} />)
							) : (
								<p>No reviews yet</p>
							)}
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
								Original language:{" "}
								<span>{selectedMovie.original_language}</span>
							</p>
							<p className='information-details__vote-average '>
								Average vote:
								<span
									className={`tag ${setVoteClass(selectedMovie.vote_average)}`}>
									{Math.round(selectedMovie.vote_average)}
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
				)}
			</div>
		</div>
	)
}

export default MoreDetails
