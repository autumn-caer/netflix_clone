import React from "react";
import "./App.css";
import Row from "./ components/row";
import Banner from "./ components/Banner";
import requests from "./requests";
function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hi Cleaver Programmer</h1>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
      <Row
        title="Trendings"
        fetchUrl={requests.fetchTrending}
        isLarge={false}
      ></Row>
    </div>
  );
}

export default App;
