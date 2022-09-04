import { useParams } from "react-router-dom"
import { MovieList } from "../MovieComponents/MovieList"

export const Genre = () => {
	const { genreID } = useParams()
	return <MovieList method='genres' id={genreID} />
}
