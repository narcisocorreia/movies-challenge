import React from "react";
import styled from "styled-components";
import MovieEntry from "./movie-entry";

const Body = styled.div`
  grid-column: 1 /-1;
  grid-row: 2 / -1;

  scroll-behavior: smooth;
  overflow: scroll;
  overflow-x: hidden;
`;

function List({ moviesList, onMovieClick }) {
  return (
    <Body>
      {moviesList.map((movie, index) => {
        const { rank, title, year, revenue, id } = movie;
        return (
          <MovieEntry
            rank={rank}
            title={title}
            year={year}
            revenue={revenue}
            id={id}
            key={index}
            onMovieClick={onMovieClick}
          />
        );
      })}
    </Body>
  );
}

export default List;
