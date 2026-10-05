import './App.css'
import MovieList from './components/MovieList/MovieList'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <main>
        <MovieList />
      </main>
    </div>
  )
}

export default App