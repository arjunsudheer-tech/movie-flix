import './MovieCard.css'
import StarIcon from '../../assets/star.png'

const MovieCard = ({movie}) => {
  return (
    <>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`} className='movie-card' target="_blank">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster" className='movie-poster '/>
        <div className="movie-details">
          <h3 className='movie-name'>{movie.title}</h3>
        <div className="movie-date-rating">
          <p className='movie-date'>{movie.release_date}</p>
          <p className='movie-rating'>{movie.vote_average} <img src={StarIcon} className="rating-icon" alt="rating-icon" /></p>
        </div>
        <p className='movie-description'>{movie.overview.slice(0,100) + "..."}</p>
        </div>
      </a>
    </>
  )
}

export default MovieCard