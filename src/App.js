import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import { useState } from 'react';
import { movies } from './data';
import MovieList from './components/MovieList';

function App() {
  const [allMovies, setAllMovies] = useState(movies)  // let us assume that this state (allMovies) is our database
  const [subMovies, setSubMovies] = useState(allMovies) 
  return (
    <div className="App">
      <Navbar />
      <div className='container-fluid mt-3'>
        <MovieForm allMovies={allMovies} setAllMovies={setAllMovies} 
                  subMovies={subMovies} setSubMovies={setSubMovies}/>
        <MovieList allMovies={allMovies} setAllMovies={setAllMovies} 
                  subMovies={subMovies} setSubMovies={setSubMovies}/>
      </div>
    </div>
  );
}

export default App;
