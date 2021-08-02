import React from "react";
import styled from "styled-components";
import Button from "./option-button";
import SearchInput from "./search-input";

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
  onSearchInputClick,
  resetMoviesList,
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

      <SearchInput
        resetMoviesList={resetMoviesList}
        onSearchInputClick={onSearchInputClick}
      />
    </Body>
  );
}

export default OptionsBar;
