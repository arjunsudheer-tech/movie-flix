import MovieCard from './MovieCard'
import './MovieList.css'
import { useEffect , useState } from 'react'

const MovieList = () => {

  const [movies , setMovies] = useState([]);


  useEffect(() => {
    fetchMovies();
  } , []);

  const fetchMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=afe37d977b15dfc4923bddd04cfd11e7');
    const data = await response.json();
    setMovies(data.results);

  }
  return (
    <>
      <section className="movie-list">
        <header className='movie-list-header'>
          <h2 className='movie-list-heading'>Popular</h2>
          <div className="movie-list-fs">
            <ul className="movie-filter">
              <li className="movie-filter-item active">8+ star</li>
              <li className="movie-filter-item">7+ star</li>
              <li className="movie-filter-item">6+ star</li>
            </ul>

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
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          }
        </div>
      </section>
    </>
  )
}

export default MovieList