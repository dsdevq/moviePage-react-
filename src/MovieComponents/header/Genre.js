import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useMoviePage } from "../../context/MoviePageContext"
import { useFetch } from "../../hooks/UseFetch"
import { ButtonComponent } from "../Button"
import { MovieList } from "../MovieList"

export const Genre = () => {
	let params = useParams()

	return (
		<>
			<div className='App'>
				<MovieList method='genres' id={params.genreID} />
				{/* <div className='button-container'>
						{pages &&
							pages.map((page, index) => (
								<Link
									key={index}
									to={`/moviePage-react-/genres/${params.genreID}/page=${
										index + 1
									}`}>
									<ButtonComponent
										event={() => setPage(index + 1)}
										text={page}
									/>
								</Link>
							))}
					</div> */}
			</div>
		</>
	)
}
