import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: auto;
  height: 30px;

  background: ${(props) =>
    props.selected
      ? "#00baff 0% 0% no-repeat padding-box"
      : "#ffffff 0% 0% no-repeat padding-box"};

  border: 1px solid rgba(120, 132, 158, 0.4);
  border-radius: 20px;
  text-align: center;
  font: normal normal 300 12px Roboto;
  letter-spacing: 0px;
  color: #78849e;

  color: ${(props) => (props.selected ? "#012433" : "#78849e")};

  :focus {
    background: #00baff 0% 0% no-repeat padding-box;
    color: #012433;
  }
`;

function SearchButton({ buttonCopy, buttonFlag, onButtonClick }) {
  return (
    <Button onClick={onButtonClick} selected={buttonFlag}>
      {buttonCopy}
    </Button>
  );
}

export default SearchButton;
