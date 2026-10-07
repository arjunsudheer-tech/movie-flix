import { useEffect , useState } from 'react'
import _ from 'lodash'
import FilterMovies from './FilterMovies';
import MovieCard from './MovieCard'
import './MovieList.css'

const MovieList = ({type,title}) => {

  const [movies , setMovies] = useState([]);
  const [filterMovies , setFilterMovies] = useState([]);
  const [minRating , setMinRating] = useState(0);
  const [sort , setSort] = useState({
    by: 'default',
    order: 'asc'
  });

  useEffect(() => {
    fetchMovies();
  } , []);

  useEffect(() => {
    if(sort.by !== 'default') {
      const sortedMovies = _.orderBy(filterMovies,[sort.by],[sort.order]);
      setFilterMovies(sortedMovies);
    }
  } , [sort]);

  const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=afe37d977b15dfc4923bddd04cfd11e7`);
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

  const handleSort = (e) => {
    const { name , value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value}));
  }

  return (
    <>
      <section className="movie-list" id={type}>
        <header className='movie-list-header'>
          <h2 className='movie-list-heading'>{title}</h2>
          <div className="movie-list-fs">
            <FilterMovies minRating={minRating} onRatingClick={handleFilter} />

            <select name="by" className="movie-sorting" onChange={handleSort} value={sort.by}>
              <option value="default">Sort By</option>
              <option value="release_date">Date</option>
              <option value="vote_average">Rating</option>
            </select>

            <select name="order" className="movie-sorting" onChange={handleSort} value={sort.order}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
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