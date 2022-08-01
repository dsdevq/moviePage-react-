import { MovieList } from "../MovieComponents/MovieList"

export const MoviePage = () => {
	return (
		<div className='App'>
			<MovieList method={"featured"} />
		</div>
	)
}
