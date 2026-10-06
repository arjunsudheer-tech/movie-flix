
const FilterMovies = ({minRating , onRatingClick}) => {
  return (
    <ul className="movie-filter">
      <li 
        className={minRating === 8 ? 'movie-filter-item active' : 'movie-filter-item'}
        onClick={() => onRatingClick(8)}>8+ star
      </li>
      <li 
        className={minRating === 7 ? 'movie-filter-item active' : 'movie-filter-item'}
        onClick={() => onRatingClick(7)}>7+ star
      </li>
      <li 
        className={minRating === 6 ? 'movie-filter-item active' : 'movie-filter-item'}
        onClick={() => onRatingClick(6)}>6+ star
      </li>
    </ul>
  )
}

export default FilterMovies