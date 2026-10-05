import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      <h1>Movie Flix</h1>
      <div className='navbar-links'>
        <a href="">Popular</a>
        <a href="">Top Rated</a>
        <a href="">Upcoming</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar