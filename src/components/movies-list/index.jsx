import React from "react";
import styled from "styled-components";

import DescriptionBar from "./description-bar";
import List from "./list";

const Body = styled.div`
  width: 68.7%;
  height: 69.7%;

  margin-top: 38px;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(9, 1fr);

  gap: 0px 18px;
`;

function MoviesList({ moviesList, onMovieClick }) {
  return (
    <Body>
      <DescriptionBar />
      {moviesList && (
        <List moviesList={moviesList} onMovieClick={onMovieClick} />
      )}
    </Body>
  );
}

export default MoviesList;
