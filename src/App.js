import logo from "./logo.svg";
import "./App.css";

import React from "react";

function App() {
  const [moviesList, setMoviesList] = React.useState([]);

  //Fetching movies list
  React.useEffect(() => {
    fetch("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const { content } = data;
        setMoviesList(content);
      });
  }, []);

  const getMoviesInformation = async (movieID) => {
    let movieInfo = {};
    await fetch(
      `http://movie-challenge-api-xpand.azurewebsites.net/api/movies/${movieID}`
    )
      .then((res) => res.json())
      .then((data) => {
        movieInfo = data;
      });

    console.log(movieInfo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            const movieID = Math.floor(Math.random() * moviesList.length);
            console.log(movieID);
            getMoviesInformation(moviesList[movieID].id);
          }}
        >
          Click Me To get Movies info please
        </button>
      </header>
    </div>
  );
}

export default App;
