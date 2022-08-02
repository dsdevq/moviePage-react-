import React, { useState } from "react"
import { Virtual, EffectFade, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import { useFetch } from "../hooks/UseFetch"
import { useMoviePage } from "../context/MoviePageContext"
import { Movie } from "../MovieComponents/Movie"
import "swiper/css"
import "swiper/css/navigation"
import { Link } from "react-router-dom"
import { MovieList } from "../MovieComponents/MovieList"

export const MainPage = () => {
	const { FETCH } = useMoviePage()
	const movies = useFetch(FETCH.upcoming(1))

	const [method, setMethod] = useState("featured")

	return (
		<div className='main-page'>
			{/* //! Swiper */}
			<div className='swiper-container'>
				<Swiper
					className='swiper'
					navigation={true}
					modules={[Virtual, EffectFade, Navigation]}
					spaceBetween={50}
					slidesPerView={3}
					virtual>
					{movies.results &&
						movies.results.map((movie, index) => (
							<SwiperSlide
								className='swiper-slide'
								key={movie.id}
								virtualIndex={index}>
								<Link
									className='movie-link'
									to={`/moviePage-react-/movies/${movie.id}`}>
									<Movie {...movie} />
								</Link>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className='main-page__container'>
				<aside className='movies'>
					<div className='movies__buttons'>
						<button
							className='movies__button header-item'
							onClick={() => setMethod("upcoming")}>
							Premiere
						</button>
						<button
							className='movies__button header-item'
							onClick={() => setMethod("trending")}>
							Popular
						</button>
						<button
							className='movies__button header-item'
							onClick={() => setMethod("featured")}>
							Featured
						</button>
					</div>
					<MovieList method={method} />
				</aside>
				<aside className='news'>
					<h1> News</h1>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
					est placerat in egestas erat. Aliquam nulla facilisi cras fermentum
					odio eu feugiat. Dignissim cras tincidunt lobortis feugiat vivamus at
					augue. Non odio euismod lacinia at. Ac feugiat sed lectus vestibulum
					mattis. Nisi porta lorem mollis aliquam ut porttitor leo. Nibh sed
					pulvinar proin gravida. Vulputate eu scelerisque felis imperdiet
					proin. Ut placerat orci nulla pellentesque dignissim enim sit amet
					venenatis. Nec sagittis aliquam malesuada bibendum arcu. Dictum varius
					duis at consectetur lorem donec massa. Faucibus vitae aliquet nec
					ullamcorper sit amet. Sodales neque sodales ut etiam. Sodales neque
					sodales ut etiam sit amet. Aenean sed adipiscing diam donec. Tempus
					quam pellentesque nec nam aliquam sem et tortor. Augue neque gravida
					in fermentum et sollicitudin ac orci phasellus. Nam libero justo
					laoreet sit. Diam maecenas ultricies mi eget mauris pharetra et
					ultrices neque. Sagittis aliquam malesuada bibendum arcu vitae
					elementum curabitur vitae nunc. Nunc vel risus commodo viverra.
					Facilisis volutpat est velit egestas. At ultrices mi tempus imperdiet
					nulla malesuada pellentesque. Velit dignissim sodales ut eu sem
					integer vitae justo eget. Ut sem viverra aliquet eget sit amet tellus.
					Sit amet risus nullam eget felis. Metus dictum at tempor commodo.
					Facilisi morbi tempus iaculis urna id. Dignissim cras tincidunt
					lobortis feugiat vivamus at. Quam viverra orci sagittis eu volutpat
					odio facilisis. Quam elementum pulvinar etiam non quam. Posuere urna
					nec tincidunt praesent. Nunc non blandit massa enim nec dui nunc
					mattis. Proin libero nunc consequat interdum varius. Et sollicitudin
					ac orci phasellus egestas tellus rutrum tellus. Massa massa ultricies
					mi quis hendrerit dolor magna. Sodales ut eu sem integer vitae. Enim
					eu turpis egestas pretium aenean pharetra. Dolor sit amet consectetur
					adipiscing elit pellentesque habitant morbi tristique. Condimentum id
					venenatis a condimentum vitae sapien pellentesque. Cursus in hac
					habitasse platea dictumst quisque sagittis purus sit. Ut venenatis
					tellus in metus vulputate eu scelerisque felis. Sociis natoque
					penatibus et magnis dis parturient montes nascetur. Nullam vehicula
					ipsum a arcu cursus. Turpis egestas maecenas pharetra convallis
					posuere morbi leo. Nunc mi ipsum faucibus vitae. Ullamcorper eget
					nulla facilisi etiam. Tempor orci eu lobortis elementum nibh.
					Convallis tellus id interdum velit. Neque egestas congue quisque
					egestas diam in arcu cursus. Quam adipiscing vitae proin sagittis nisl
					rhoncus mattis rhoncus. Ac placerat vestibulum lectus mauris ultrices
					eros in cursus. Nulla malesuada pellentesque elit eget. In eu mi
					bibendum neque egestas congue. Lectus arcu bibendum at varius vel
					pharetra. Dolor magna eget est lorem ipsum dolor. Suspendisse in est
					ante in nibh mauris cursus. Id porta nibh venenatis cras sed felis.
					Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Non arcu
					risus quis varius quam. Diam vel quam elementum pulvinar etiam non
					quam lacus. Faucibus in ornare quam viverra orci sagittis eu volutpat
					odio. Lacus luctus accumsan tortor posuere ac ut consequat semper. Leo
					urna molestie at elementum eu facilisis sed. Justo nec ultrices dui
					sapien. Urna cursus eget nunc scelerisque viverra mauris in aliquam.
					Lobortis feugiat vivamus at augue eget. Nisl purus in mollis nunc sed.
					Enim neque volutpat ac tincidunt vitae semper quis lectus. Elit ut
					aliquam purus sit amet. Euismod elementum nisi quis eleifend quam
					adipiscing vitae proin sagittis. Faucibus pulvinar elementum integer
					enim neque volutpat ac tincidunt. Iaculis eu non diam phasellus.
					Venenatis tellus in metus vulputate eu scelerisque felis imperdiet
					proin. Metus dictum at tempor commodo. Amet nulla facilisi morbi
					tempus iaculis urna id volutpat lacus. Senectus et netus et malesuada
					fames ac turpis egestas. Ac placerat vestibulum lectus mauris ultrices
					eros in cursus. Lectus sit amet est placerat in egestas erat
					imperdiet. Iaculis nunc sed augue lacus viverra vitae. Nulla porttitor
					massa id neque aliquam vestibulum. Egestas maecenas pharetra convallis
					posuere. Viverra aliquet eget sit amet tellus cras adipiscing enim eu.
					A lacus vestibulum sed arcu non odio euismod. Arcu bibendum at varius
					vel pharetra vel turpis nunc. Risus viverra adipiscing at in tellus
					integer feugiat scelerisque. Et ligula ullamcorper malesuada proin
					libero nunc. Scelerisque varius morbi enim nunc. Aliquam purus sit
					amet luctus. Magna ac placerat vestibulum lectus mauris ultrices. Odio
					pellentesque diam volutpat commodo sed egestas egestas. Ornare quam
					viverra orci sagittis eu volutpat odio facilisis. Pellentesque
					dignissim enim sit amet venenatis urna cursus eget. Egestas congue
					quisque egestas diam. Tempor nec feugiat nisl pretium fusce id velit
					ut tortor. Viverra ipsum nunc aliquet bibendum enim facilisis gravida
					neque convallis. Proin sagittis nisl rhoncus mattis. Nunc id cursus
					metus aliquam eleifend. Pellentesque adipiscing commodo elit at. Nunc
					scelerisque viverra mauris in aliquam sem fringilla ut. In est ante in
					nibh mauris. Ut tristique et egestas quis ipsum suspendisse ultrices
					gravida. Velit dignissim sodales ut eu. Mauris commodo quis imperdiet
					massa tincidunt nunc pulvinar sapien. Senectus et netus et malesuada
					fames ac turpis egestas. Lacus vestibulum sed arcu non odio euismod
					lacinia at. Id semper risus in hendrerit gravida rutrum quisque non.
					Eu volutpat odio facilisis mauris sit amet massa. Sed faucibus turpis
					in eu mi bibendum neque egestas congue. Cursus eget nunc scelerisque
					viverra mauris in. Sed viverra ipsum nunc aliquet bibendum enim.
					Ultricies mi quis hendrerit dolor magna. Rhoncus aenean vel elit
					scelerisque mauris pellentesque pulvinar pellentesque. Lorem sed risus
					ultricies tristique nulla aliquet enim. Sagittis eu volutpat odio
					facilisis mauris sit amet massa vitae. Vulputate dignissim suspendisse
					in est ante. Dis parturient montes nascetur ridiculus mus mauris.
					Tellus orci ac auctor augue mauris. Id eu nisl nunc mi. Hac habitasse
					platea dictumst vestibulum rhoncus est pellentesque. Accumsan tortor
					posuere ac ut consequat. Habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper. Ultricies lacus sed turpis
					tincidunt. Purus in mollis nunc sed id semper risus in hendrerit. Ac
					tortor vitae purus faucibus ornare suspendisse sed nisi. Tellus id
					interdum velit laoreet id donec ultrices tincidunt. Et malesuada fames
					ac turpis egestas maecenas. Eu volutpat odio facilisis mauris sit amet
					massa vitae tortor. Sed viverra tellus in hac habitasse. Turpis nunc
					eget lorem dolor sed viverra ipsum. Viverra accumsan in nisl nisi
					scelerisque eu ultrices vitae auctor. Non enim praesent elementum
					facilisis leo vel fringilla. Nunc mattis enim ut tellus elementum
					sagittis vitae et leo. Suspendisse in est ante in nibh mauris cursus.
					Id ornare arcu odio ut sem nulla pharetra. Purus ut faucibus pulvinar
					elementum integer. In ante metus dictum at tempor commodo. Ullamcorper
					morbi tincidunt ornare massa eget egestas purus. Risus viverra
					adipiscing at in. Adipiscing elit duis tristique sollicitudin nibh. Mi
					proin sed libero enim sed faucibus. Tincidunt tortor aliquam nulla
					facilisi cras fermentum odio. Blandit libero volutpat sed cras ornare
					arcu dui vivamus arcu. Eu sem integer vitae justo eget. Egestas erat
					imperdiet sed euismod nisi porta lorem. Varius vel pharetra vel turpis
					nunc eget lorem dolor. Id diam vel quam elementum pulvinar etiam non
					quam lacus. Sit amet consectetur adipiscing elit. Laoreet non
					curabitur gravida arcu ac. Bibendum ut tristique et egestas. Vivamus
					arcu felis bibendum ut tristique et egestas quis. Amet mauris commodo
					quis imperdiet massa tincidunt nunc pulvinar. Elementum nisi quis
					eleifend quam adipiscing vitae proin sagittis nisl. Dictum at tempor
					commodo ullamcorper a lacus vestibulum. Vitae justo eget magna
					fermentum iaculis eu non diam. In nibh mauris cursus mattis molestie
					a. Consequat mauris nunc congue nisi vitae suscipit. Faucibus turpis
					in eu mi bibendum neque egestas. Rhoncus mattis rhoncus urna neque
					viverra justo nec. Nibh ipsum consequat nisl vel pretium lectus. Id
					aliquet risus feugiat in ante metus dictum at. Morbi tristique
					senectus et netus et malesuada fames ac. Risus quis
				</aside>
			</div>
		</div>
	)
}
