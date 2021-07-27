import React from "react";
import styled from "styled-components";
import MoviesList from "./components/movies-list";

const Body = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  place-items: center;
`;

const TopBar = styled.div`
  top: 0px;
  left: 0px;

  width: 100%;
  height: 50px;
  background-color: #012433;
`;

function App() {
  const [moviesContainer, setMoviesContainer] = React.useState([]);

  //Fetching movies list
  React.useEffect(() => {
    fetch("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const { content } = data;
        setMoviesContainer(content);
      });
  }, []);

  return (
    <Body>
      <TopBar />
      {moviesContainer && <MoviesList moviesList={moviesContainer} />}
    </Body>
  );
}

export default App;
