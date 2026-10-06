import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      <h1>Movie Flix</h1>
      <div className='navbar-links'>
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top Rated</a>
        <a href="#upcoming">Upcoming</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar