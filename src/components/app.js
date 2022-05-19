import React from 'react';
import withFetch from '../hocs/with-fetch';

class App extends React.Component {
  
  render() {
    const WithFetchFilm = withFetch(); 
    return (
      <WithFetchFilm />
    );
  }
 }

export default App;