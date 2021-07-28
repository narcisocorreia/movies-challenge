import React from "react";
import styled from "styled-components";

const Body = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(1, 1fr);

  gap: 0px;

  border-bottom: 1px solid #9aaebb;

  align-items: center;
`;

const InfoText = styled.h1`
  font: normal normal normal 16px/20px Roboto;
  letter-spacing: 0px;
  color: #536b7a;
  opacity: 1;
`;

const RankingColumn = styled(InfoText)`
  grid-column: 1 / span 1;
  text-align: center;
`;

const TitleColumn = styled(InfoText)`
  grid-column: 2 / span 4;
  text-align: left;
`;

const YearColumn = styled(InfoText)`
  grid-column: 6 / span 2;
  text-align: left;
`;

const RevenueColumn = styled(InfoText)`
  grid-column: 8 / -1;
  text-align: left;
`;

function MovieEntry({ rank, title, year, revenue, id, onMovieClick }) {
  //Fetching movie details
  const getMoviesInformation = async (movieID) => {
    await fetch(
      `http://movie-challenge-api-xpand.azurewebsites.net/api/movies/${movieID}`
    )
      .then((res) => res.json())
      .then((data) => {
        onMovieClick(data);
      });
  };

  return (
    <Body
      onClick={() => {
        getMoviesInformation(id);
      }}
    >
      <RankingColumn>{rank}</RankingColumn>
      <TitleColumn>{title}</TitleColumn>
      <YearColumn>{year}</YearColumn>
      <RevenueColumn>{revenue}</RevenueColumn>
    </Body>
  );
}

export default MovieEntry;
