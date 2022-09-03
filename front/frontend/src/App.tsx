import React from "react";
import "./App.css";
import Row from "./ components/row";
import requests from "./requests";
function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hi Cleaver Programmer</h1>
      <Row
        title="Trendings"
        fetchUrl={requests.fetchTrending}
        isLarge={false}
      ></Row>
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      ></Row>
      <Row
        title="TopRated"
        fetchUrl={requests.fetchTopRated}
        isLarge={true}
      ></Row>
      {/* <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row> */}
    </div>
  );
}

export default App;
