import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";

function App() {
    // const [title, setTitle] = useState('');

    const [movies, setMovies] = useState([]);

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>
            <h2>Add movie</h2>

            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>

          

        </div>
    );
}

export default App;
