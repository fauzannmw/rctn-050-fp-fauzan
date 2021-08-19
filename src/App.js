import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue) {
      fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=c36815ec`)
        .then((res) => res.json())
        .then((data) => setMovies(data));
    } else {
      fetch(`https://www.omdbapi.com/?s=star+wars&apikey=c36815ec`)
        .then((res) => res.json())
        .then((data) => setMovies(data));
    }
  }, [searchValue]);

  return (
    <div className="App">
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Movie movies={movies} />
    </div>
  );
}

export default App;
