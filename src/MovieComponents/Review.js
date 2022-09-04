import "./Review.css"
import monke3 from "../assets/monke3.png"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/UseFetch"
import { useMoviePage } from "../context/MoviePageContext"

export const ReviewComponent = () => {
	const { movieID } = useParams()
	const { FETCH, IMG_API } = useMoviePage()
	const { results } = useFetch(FETCH.reviews(movieID))

	const convertURL = (url) => {
		if (url && url.toString().startsWith("/https")) {
			return url.toString().replace("/", "")
		} else return IMG_API(url)
	}

	return (
		<>
			{results ? (
				results.map(
					({ id, author_details, content, created_at, updated_at }) => (
						<div key={id} className='review'>
							<img
								className='review-avatar'
								src={
									(author_details.avatar_path &&
										convertURL(author_details.avatar_path)) ||
									monke3
								}
								alt='avatar'
							/>
							<div className='review-details'>
								<p className='review-username'>{author_details.username}</p>
								{author_details.rating && (
									<p className='review-rating'>
										Rating: {author_details.rating}
									</p>
								)}
								<p className='review-content'>{content}</p>
								<p className='review-created_at'>Created at: {created_at}</p>
								<p className='review-updated_at'>Updated at: {updated_at}</p>
							</div>
						</div>
					)
				)
			) : (
				<p>No reviews yet</p>
			)}
		</>
	)
}
