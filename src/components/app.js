import React from 'react';
import WithFetch from './with-fetch';

class App extends React.Component {
  
  render() {
    const WithFetchFilm = WithFetch(); 
    return (
      <WithFetchFilm />
    );
  }
 }

export default App;