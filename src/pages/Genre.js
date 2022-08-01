import { useParams } from "react-router-dom"
import { MovieList } from "../MovieComponents/MovieList"

export const Genre = () => {
	const params = useParams()
	return <MovieList method='genres' id={params.genreID} />
}
