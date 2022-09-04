import React from "react";
import "./App.css";
import Row from "./ components/row";
import Banner from "./ components/Banner";
import Nav from "./ components/Nav";
import requests from "./requests";
function App(): JSX.Element {
  return (
    <div className="App" style={{ height: "2000px" }}>
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
      <Row
        title="Trendings"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={false}
      ></Row>
    </div>
  );
}

export default App;
