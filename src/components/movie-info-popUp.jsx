import React from "react";
import styled from "styled-components";

import { ReactComponent as CloseSVG } from "../assets/svg/close.svg";
const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: #0000007d 0% 0% no-repeat padding-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  position: relative;
  flex-direction: column;

  display: flex;

  width: 54.8%;
  height: 88.8%;
  padding: 0px 60px;

  background-color: white;
  box-shadow: 0px 20px 40px #01243366;
`;

const Line = styled.div`
  width: 52px;
  height: 2px;
  background: #21b3cf;
`;

const CloseDiv = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  place-items: center;
  right: 24px;
  top: 24px;
`;

const CloseTex = styled.h1`
  font: normal normal normal 8px/16px Roboto;
  letter-spacing: 0.64px;
  color: #718fa2;
  text-transform: uppercase;
`;

const MovieTitle = styled.h1`
  text-align: left;

  font-size: 32px;
  font: Roboto;
  letter-spacing: 0px;
  color: #164e78;
`;

const InfoDiv = styled.div``;

const InfoTitle = styled.h1`
  text-align: left;
  font: Roboto;
  font-size: 14px;
  letter-spacing: 0px;
  color: #78849eb9;
`;

const Info = styled.h1`
  text-align: left;
  font: Roboto;
  font-size: 16px;
  letter-spacing: 0px;
  color: #78849e;

  margin-top: 4px;
`;

const InfoBlue = styled.h1`
  text-align: left;
  font: Roboto;
  font-size: 16px;
  letter-spacing: 0px;
  margin-top: 4px;
  color: #00baff;
`;

const TextLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;

const setMovieInfo = (title, info) => {
  if (title === "Director" || title === "Actors") {
    return (
      <InfoDiv>
        <InfoTitle>{title}</InfoTitle>

        <InfoBlue>{info}</InfoBlue>
      </InfoDiv>
    );
  }
  return (
    <InfoDiv>
      <InfoTitle>{title}</InfoTitle>
      <Info>{info}</Info>
    </InfoDiv>
  );
};

function MovieInfoPopUp({ movieInfo, onCloseButtonClick }) {
  return (
    <Shadow>
      <Body>
        <CloseDiv onClick={onCloseButtonClick}>
          <CloseSVG width="24px" height="24px" />
          <CloseTex>close</CloseTex>
        </CloseDiv>
        <MovieTitle>{movieInfo.title}</MovieTitle>

        <Line />

        {setMovieInfo("Year", movieInfo.year)}
        {setMovieInfo("Description", movieInfo.description)}
        <TextLine>
          {setMovieInfo("Director", movieInfo.director)}
          {setMovieInfo("Actors", movieInfo.actors)}
        </TextLine>
        {setMovieInfo("Runtime", movieInfo.runtime)}
        {setMovieInfo("Rating", movieInfo.rating)}
        {setMovieInfo("Votes", movieInfo.votes)}
        {setMovieInfo("Revenue", movieInfo.revenue)}
        {setMovieInfo("Metascore", movieInfo.metascore)}
      </Body>
    </Shadow>
  );
}

export default MovieInfoPopUp;
