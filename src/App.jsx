import React from "react";
import styled from "styled-components";
import MoviesList from "./components/movies-list";
import MovieInfoPopUp from "./components/movie-info-popUp";
import { ReactComponent as ResetSVG } from "./assets/svg/reset.svg";

const Body = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  place-items: center;
`;

const TopBar = styled.div`
  top: 0px;
  left: 0px;

  width: 100%;
  height: 50px;
  background-color: #012433;
`;

const SearchBar = styled.div`
  width: 68.7%;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h1`
  text-align: left;
  font: normal normal normal 24px Roboto;
  letter-spacing: 0px;
  color: #386071;
`;

const SearchButtons = styled.div`
  display: flex;

  flex-direction: row;
  gap: 16px;
  place-items: center;
`;

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

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: #0000007d 0% 0% no-repeat padding-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const YearsBG = styled.div`
  width: 13.03%;
  height: 62.24%;

  top: 135px;
  left: 499px;

  gap: 8px;

  display: flex;
  flex-direction: column;
  place-items: center;

  background-color: white;

  overflow: scroll;
  overflow-x: hidden;
`;

const YearsTitle = styled.h1`
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #78849eb9;
`;

const Year = styled.p`
  text-align: center;
  font-size: 13px;

  letter-spacing: 0px;
  color: #536b7a;
`;

const Years = (onYearClick, exitYearsList) => {
  const Array = [
    2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
    2004, 2003, 2002, 2001,
  ];

  return (
    <Shadow onDoubleClick={exitYearsList}>
      <YearsBG>
        <YearsTitle>Select Year</YearsTitle>
        {Array.map((element) => {
          return (
            <Year
              onClick={() => {
                onYearClick(element);
              }}
            >
              {element}
            </Year>
          );
        })}
      </YearsBG>
    </Shadow>
  );
};

const SearchButton = (buttonCopy, buttonFlag, handleButtonClick) => {
  return (
    <Button selected={buttonFlag} onClick={handleButtonClick}>
      {buttonCopy}
    </Button>
  );
};

function App() {
  const [moviesList, setMoviesList] = React.useState();
  const [listedItems, setListedItems] = React.useState();

  const [wasTopRevenue, setWaTopRevenue] = React.useState(false);
  const [wasTopRevenuePerYear, setWaTopRevenuePerYear] = React.useState(false);
  const [showYearsList, setShowYearList] = React.useState(false);

  const [movieInfo, setMovieInfo] = React.useState(null);

  //Fetching movies list
  React.useEffect(() => {
    fetch("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const { content } = data;
        setMoviesList(content);
        setListedItems(content);
      });
  }, []);

  const handleMovieClick = (movieInfo) => {
    setMovieInfo(movieInfo);
  };

  const handleCloseButtonClick = () => {
    setMovieInfo(null);
  };

  const handleTopRevenueClick = () => {
    let moviesCopy = [...moviesList];

    const topRevenue = moviesCopy.sort((a, b) => b.revenue - a.revenue);

    setListedItems((prevState) => [...topRevenue]);
    setWaTopRevenue(true);
  };

  const handleTopRevenuePerYearClick = () => {
    setWaTopRevenue(false);
    setShowYearList(true);
  };

  const sortYearsByTopRevenue = (year) => {
    setShowYearList(false);
    setWaTopRevenuePerYear(true);

    let moviesCopy = [...moviesList];

    const yearArray = moviesCopy.filter((element) => element.year === year);
    const topRevenue = yearArray.sort((a, b) => b.revenue - a.revenue);

    setListedItems((prevState) => [...topRevenue]);
  };

  const resetListedItems = () => {
    setListedItems((prevState) => [...moviesList]);
    setWaTopRevenue(false);
    setWaTopRevenuePerYear(false);
  };

  const handleYearsListExit = () => {
    setShowYearList(false);
  };

  const showResetButton = () => {
    if (wasTopRevenue || wasTopRevenuePerYear) {
      return <ResetSVG width="24px" height="24px" onClick={resetListedItems} />;
    }
    return null;
  };

  return (
    <Body>
      <TopBar />
      <SearchBar>
        <Title>Movie raking</Title>
        <SearchButtons>
          {SearchButton("Top 10 Revenue", wasTopRevenue, handleTopRevenueClick)}
          {SearchButton(
            "Top 10 Revenue per Year",
            wasTopRevenuePerYear,
            handleTopRevenuePerYearClick
          )}

          {showResetButton()}
        </SearchButtons>
      </SearchBar>

      {movieInfo && (
        <MovieInfoPopUp
          movieInfo={movieInfo}
          onCloseButtonClick={handleCloseButtonClick}
        ></MovieInfoPopUp>
      )}

      {listedItems && (
        <MoviesList moviesList={listedItems} onMovieClick={handleMovieClick} />
      )}

      {showYearsList && Years(sortYearsByTopRevenue, handleYearsListExit)}
    </Body>
  );
}

export default App;
