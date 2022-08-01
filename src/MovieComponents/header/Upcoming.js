import "./Header.css"
import { MovieList } from "../MovieList"

export const Upcoming = () => {
	return (
		<div className='App'>
			<MovieList method='upcoming' />
		</div>
	)
}
