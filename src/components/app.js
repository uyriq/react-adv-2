import React from "react";
import withFetch from "../hocs/with-fetch"

export default class App extends React.Component {
  
  const WithFetchFilm = withFetch(); 

  render() {
    return (
      <WithFetchFilm />
    );
  }
}
