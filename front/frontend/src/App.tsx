import React from "react";
import "./App.css";
import Row from "./ components/row";
import requests from "./requests";
function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hi Cleaver Programmer</h1>
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
    </div>
  );
}

export default App;
