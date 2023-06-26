import { useState, useEffect } from 'react';
import SearchIcon from './Search-icon.png';
import './App.css';
// 45592dcf

import React from 'react';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=45592dcf';

const movie1 = {
    "Title": "Baby Driver",
    "Year": "2017",
    "imdbID": "tt3890160",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SX300.jpg"
};

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Baby');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No Movies Found!</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;
















//const App = () => {
//    const [counter, setCounter] = useState(0);

//    useEffect(() => {
//        setCounter(100);
//    }, []);
//    //The thing inside the [] is the condition for when the code inside {} is executed. Empty [] is on init page load

//    return (
//        <div className="App">
//            <button onClick={ () => setCounter((prevCount) => prevCount - 1) }>-</button>
//            <h1>{ counter }</h1>
//            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//        </div>
//    );
//}

//export default App;




//const Person = (props) => {
//    return (
//        <>
//            <h1>First Name: {props.firstName}</h1>
//            <h2>Last Name: {props.lastName}</h2>
//            <h2>Age: {props.age}</h2>
//        </>
//    );
//}

//const App = () => {
//    const name = "Joe";

//    return (
//        <div className="App">
//            <Person
//                firstName={'John'}
//                lastName={'Doe'}
//                age={30}
//            />
//            <Person firstName={'Jane'} lastName={'Buck'} age={25} />
//            <h1>Joeseph Mother</h1>
//            {name ? (
//                <>
//                    <h1>{name}</h1>
//                </>
//            ) : (
//                <>
//                    <h1>test2</h1>
//                    <h2>There is no name</h2>
//                </>
//            )}
//      </div>
//    );
//}

//export default App;
