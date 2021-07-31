import React from "react";
import styled from "styled-components";

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: #000000da 0% 0% no-repeat padding-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  place-items: center;

  justify-content: space-evenly;

  width: 54.8%;
  height: 60%;

  background-color: white;
  box-shadow: 0px 20px 40px #01243366;
`;

const Title = styled.h1`
  text-align: center;
  font: normal normal normal 24px Roboto;
  letter-spacing: 0px;
  color: #386071;
`;

function MovieInfoPopUp() {
  return (
    <Shadow>
      <Body>
        <Title>
          I'm sorry Mark, but unfortunately we are not able to snow you all of
          you movies.
        </Title>
      </Body>
    </Shadow>
  );
}

export default MovieInfoPopUp;
