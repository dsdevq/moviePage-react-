import React, { useEffect, useState } from "react"
import "./MoreDetails.css"
import { useParams } from "react-router-dom"

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
			`https://api.themoviedb.org/3/movie/${params.movieID}/external_ids?api_key=04c35731a5ee918f014970082a0088b1`
		)
		const external_id = await response.json()
		// Fetching movie with external ID
		const result = await fetch(
			`https://api.themoviedb.org/3/find/${external_id.imdb_id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&external_source=imdb_id`
		)
		const movie = await result.json()
		console.log(movie.movie_results[0])
		setSelectedMovie(movie.movie_results[0])
	}, [])

	return (
		<div className='more-details'>
			<div className='more-details__container'>
				{selectedMovie && (
					<>
						<aside className='more-details__information information-details'>
							<h1 className='information-details__title'>
								{selectedMovie.title}
							</h1>
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
								Original language: {selectedMovie.original_language}
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
