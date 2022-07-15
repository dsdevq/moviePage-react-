import React, { useEffect, useState } from "react"
import "./MoreDetails.css"
import { useParams } from "react-router-dom"
import { SimilarMovies } from "./SimilarMovies"

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return "green"
	} else if (vote >= 6) {
		return "orange"
	} else return "red"
}

const MoreDetails = () => {
	const [selectedMovie, setSelectedMovie] = useState(null)
	// Getting id of clicked movie
	let params = useParams()

	useEffect(async () => {
		// Fetching for external ID
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${params.movieID}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
		)
		const result = await response.json()
		console.log(result)
		setSelectedMovie(result)
	}, [params.movieID])

	return (
		<div className='more-details'>
			<div className='more-details__container'>
				{selectedMovie && (
					<>
						<SimilarMovies />
						<aside className='more-details__information information-details'>
							<h1 className='information-details__title'>
								{selectedMovie.title}
							</h1>
							<div className='information-details__genre genre-box'>
								<div className='genre-box__container'>
									{selectedMovie.genres &&
										selectedMovie.genres.map((genre) => (
											<p className='genre-box__item'>{genre.name}</p>
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
							<img src={IMG_API + selectedMovie.backdrop_path} />
						</aside>
					</>
				)}
			</div>
		</div>
	)
}

export default MoreDetails
