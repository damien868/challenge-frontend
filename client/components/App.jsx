import React from 'react';
import Intro from './Intro';
import FirstQuestion from './FirstQuestion';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='entireContainer'>
        <div className='imageContainer'>
          <img src='icons8-alien-48.png' className='images'></img>
          <img src='icons8-robot-emoji-48.png' className='images'></img>
        </div>
        <hr></hr>
        <div className='start'>
          <Intro />
          <FirstQuestion />
        </div>
      </div>
    );
  }
}

export default App;
