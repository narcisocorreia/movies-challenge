import React from "react";
import styled from "styled-components";

const Body = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(1, 1fr);

  gap: 0px;

  border-bottom: 1px solid #0b749b;

  align-items: center;
`;

const InfoText = styled.h1`
  text-align: center;
  font: normal normal bold 10px/20px Roboto;
  letter-spacing: 0px;
  color: #0b749b;
  opacity: 1;

  text-transform: uppercase;
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

function DescriptionBar() {
  return (
    <Body>
      <RankingColumn>Ranking</RankingColumn>
      <TitleColumn>Title</TitleColumn>
      <YearColumn>Year</YearColumn>
      <RevenueColumn>Revenue</RevenueColumn>
    </Body>
  );
}

export default DescriptionBar;
