import React from 'react';
import Intro from './Intro';
import FirstQuestion from './FirstQuestion';

class App extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <FirstQuestion />
      </div>
    );
  }
}

export default App;
