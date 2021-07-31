import React from "react";
import styled from "styled-components";
import Button from "./option-button";

const Body = styled.div`
  display: flex;

  flex-direction: row;
  gap: 16px;
  place-items: center;
`;

function OptionsBar({
  topRevenueCopy,
  topRevenueFlag,
  onTopRevenueClick,
  topRevenuePerYearCopy,
  topRevenuePerYearFlag,
  onTopRevenuePerYearClick,
  resetButton,
}) {
  return (
    <Body>
      <Button
        buttonCopy={topRevenueCopy}
        buttonFlag={topRevenueFlag}
        onButtonClick={onTopRevenueClick}
      />

      <Button
        buttonCopy={topRevenuePerYearCopy}
        buttonFlag={topRevenuePerYearFlag}
        onButtonClick={onTopRevenuePerYearClick}
      />

      {resetButton()}
    </Body>
  );
}

export default OptionsBar;
