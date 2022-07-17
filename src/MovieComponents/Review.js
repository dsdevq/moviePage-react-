import React from "react"
import "./Review.css"
import monke3 from "../assets/monke3.png"

import { IMG_API } from "../App"

const convertURL = (url) => {
	if (url.toString().startsWith("/https")) {
		return url.toString().replace("/", "")
	} else return IMG_API(url)
}

export const Review = ({ author_details, content, created_at, updated_at }) => {
	return (
		<div className='review'>
			<img
				className='review-avatar'
				src={
					// If img url true, convert it or replace with monkey image
					(author_details.avatar_path &&
						convertURL(author_details.avatar_path)) ||
					monke3
				}
				alt='avatar'
			/>
			<div className='review-details'>
				<p className='review-username'>{author_details.username}</p>
				{author_details.rating && (
					<p className='review-rating'>Rating: {author_details.rating}</p>
				)}
				<p className='review-content'>{content}</p>
				<p className='review-created_at'>Created at: {created_at}</p>
				<p className='review-updated_at'>Updated at: {updated_at}</p>
			</div>
		</div>
	)
}
