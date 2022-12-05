import React from 'react';
import { useState, useEffect } from 'react';

import MovieCard from './MovieCards';

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=a4c4baf2';

const movie1 = {
  Poster: "N/A",
  Title: "Amazing Spiderman Syndrome",
  Type: "movie",
  Year: "2012",
  imdbID: "tt2586634"
}

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      
      <div className="search">
        <input
          placeholder="Search or movies"
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    
    </div>
  );
}

export default App;
