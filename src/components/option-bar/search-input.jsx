import React from "react";
import styled from "styled-components";
import Button from "./option-button";

import { ReactComponent as ResetSVG } from "../../assets/svg/reset.svg";

const Body = styled.div`
  display: flex;

  flex-direction: row;
  gap: 10px;
  place-items: center;
`;

const Input = styled.input`
  width: auto;
  height: 30px;

  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;

  text-align: left;
  font: normal normal 300 12px Roboto;
  letter-spacing: 0px;
  color: #78849e;
`;

function SearchInput({ resetMoviesList, onSearchInputClick }) {
  const [inputValue, setInputValue] = React.useState("");
  const [wasSearch, setWasSearchInput] = React.useState(false);

  const handleButtonClick = () => {
    if (inputValue !== "") {
      onSearchInputClick(inputValue);
      setWasSearchInput(true);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleResetSearch = () => {
    resetMoviesList();
    setInputValue("");
    setWasSearchInput(false);
  };

  const showResetButton = () => {
    if (wasSearch) {
      return (
        <ResetSVG width="24px" height="24px" onClick={handleResetSearch} />
      );
    }
    return null;
  };

  return (
    <Body>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for Year, Title, Rank, Revenue, Id..."
      />
      <Button
        buttonCopy={"Search"}
        buttonFlag={false}
        onButtonClick={handleButtonClick}
      ></Button>

      {showResetButton()}
    </Body>
  );
}

export default SearchInput;
