import React from 'react';
import '../styles/Pronouns.css';

export default function Pronouns(props) {
  return (
    <div className='questionare'>
      <div className='prompt'>Select One</div>
      <div className='choices'>
        <div className='options'>
          <img
            src='icons8-boy-48.png'
            onClick={() => props.handleClick('he/him')}
          ></img>
          <p>he/him</p>
        </div>
        <div className='options'>
          <img
            src='icons8-girl-48.png'
            onClick={() => props.handleClick('she/her')}
          ></img>
          <p>she/her</p>
        </div>
        <div className='options'>
          <img
            src='icons8-smiling-face-with-smiling-eyes-48.png'
            onClick={() => props.handleClick('they/them')}
          ></img>
          <p>they/them</p>
        </div>
      </div>
    </div>
  );
}
