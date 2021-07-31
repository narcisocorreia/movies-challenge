import React from "react";
import styled from "styled-components";
import MoviesList from "./components/movies-list";
import MovieInfoPopUp from "./components/movie-info-popUp";
import ErrorPopUp from "./components/error-popUp";

import OptionsBar from "./components/option-bar";
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

const BlueBar = styled.div`
  top: 0px;
  left: 0px;

  width: 100%;
  height: 50px;
  background-color: #012433;
`;

const TopBar = styled.div`
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

const Years = (yearsContainer, onYearClick, exitYearsList) => {
  return (
    <Shadow onDoubleClick={exitYearsList}>
      <YearsBG>
        <YearsTitle>Select Year</YearsTitle>
        {yearsContainer.map((element) => {
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

function App() {
  const [moviesList, setMoviesList] = React.useState();
  const [listedItems, setListedItems] = React.useState();
  const [yearsList, setYearsList] = React.useState();

  const [wasTopRevenue, setWaTopRevenue] = React.useState(false);
  const [wasTopRevenuePerYear, setWaTopRevenuePerYear] = React.useState(false);
  const [showYearsList, setShowYearList] = React.useState(false);
  const [errorPopUp, setErrorPopUp] = React.useState(false);

  const [movieInfo, setMovieInfo] = React.useState(null);

  //Fetching movies list
  React.useEffect(() => {
    fetch("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const { content } = data;
        setMoviesList(content);
        setListedItems(content);
        createYearsList(content);
      })
      .catch(() => {
        setErrorPopUp(true);
      });
  }, []);

  const createYearsList = (data) => {
    const years = [...new Set(data.map((item) => item.year))];

    const sortedYear = years.sort((a, b) => b - a);
    console.log(sortedYear);

    setYearsList([...sortedYear]);
  };

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
      <BlueBar />
      <TopBar>
        <Title>Movie raking</Title>
        <OptionsBar
          topRevenueCopy="Top 10 Revenue"
          topRevenueFlag={wasTopRevenue}
          onTopRevenueClick={handleTopRevenueClick}
          topRevenuePerYearCopy="Top 10 Revenue per Year"
          topRevenuePerYearFlag={wasTopRevenuePerYear}
          onTopRevenuePerYearClick={handleTopRevenuePerYearClick}
          resetButton={showResetButton}
        />
      </TopBar>

      {showYearsList &&
        Years(yearsList, sortYearsByTopRevenue, handleYearsListExit)}

      {movieInfo && (
        <MovieInfoPopUp
          movieInfo={movieInfo}
          onCloseButtonClick={handleCloseButtonClick}
        ></MovieInfoPopUp>
      )}

      {listedItems && (
        <MoviesList moviesList={listedItems} onMovieClick={handleMovieClick} />
      )}

      {errorPopUp && <ErrorPopUp />}
    </Body>
  );
}

export default App;
