import React from "react"

export const ButtonComponent = ({ text, event }) => {
	return (
		<button className='movie-showMore' onClick={event}>
			{text}
		</button>
	)
}
