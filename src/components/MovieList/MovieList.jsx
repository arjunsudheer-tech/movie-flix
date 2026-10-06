import FilterMovies from './FilterMovies';
import MovieCard from './MovieCard'
import './MovieList.css'
import { useEffect , useState } from 'react'

const MovieList = () => {

  const [movies , setMovies] = useState([]);
  const [filterMovies , setFilterMovies] = useState([]);
  const [minRating , setMinRating] = useState(0);


  useEffect(() => {
    fetchMovies();
  } , []);

  const fetchMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=afe37d977b15dfc4923bddd04cfd11e7');
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  }

  const handleFilter = (rate) => {
    if(rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  }

  return (
    <>
      <section className="movie-list">
        <header className='movie-list-header'>
          <h2 className='movie-list-heading'>Popular</h2>
          <div className="movie-list-fs">
            <FilterMovies minRating={minRating} onRatingClick={handleFilter} />

            <select name="" id="" className="movie-sorting">
              <option value="">Sort By</option>
              <option value="">Date</option>
              <option value="">Rating</option>
            </select>
            <select name="" id="" className="movie-sorting">
              <option value="">Ascending</option>
              <option value="">Descending</option>
            </select>
          </div>
        </header>

        <div className="movie-cards">
          {
            filterMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          }
        </div>
      </section>
    </>
  )
}

export default MovieList