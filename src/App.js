import React, { useEffect, useState} from "react";
import Movie from "./MovieComponents/Movie";
import MovieSort from "./MovieComponents/MovieSort";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="


function App() {
  
  const [movies, setMovies] = useState([]) 
  const [searchTerm, setSearchTerm] = useState('')



  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }

const handleOnSubmit = (event) => {
  event.preventDefault()
  if (searchTerm) {
    getMovies(SEARCH_API + searchTerm)
    setSearchTerm('')
  }
}

const handleOnChange = (event) => {
  setSearchTerm(event.target.value)
}
  
  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleOnSubmit}> 
        <input 
         className="search" 
         type="text" 
         placeholder="Search..." 
         value={searchTerm}
         onChange={handleOnChange}
         />
      </form>
      <MovieSort />
      </header>
      <div className="movie-container">
      {movies.length > 0 && movies.map(movie => (
        <Movie {...movie} key={movie.id}/>
      ))}
      </div>
    </div>
  );
}

export default App;
