import React from "react"
import { useMoviePage } from "../context/MoviePageContext"

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return "green"
	} else if (vote >= 6) {
		return "orange"
	} else return "red"
}

export const Movie = ({ title, poster_path, overview, vote_average }) => {
	const { IMG_API } = useMoviePage()

	return (
		<>
			<div className='movie'>
				<div className='movie-header'>
					<img src={IMG_API(poster_path)} alt={title} />
				</div>
				<div className='movie-info'>
					<h3> {title} </h3>
					<span className={`tag ${setVoteClass(vote_average)}`}>
						{" "}
						{Math.round(vote_average)}{" "}
					</span>
				</div>
				<div className='movie-over'>
					<h2> Overview: </h2>
					<p> {overview} </p>
				</div>
			</div>
		</>
	)
}
