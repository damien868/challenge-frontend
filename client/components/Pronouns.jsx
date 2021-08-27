import React from 'react';

export default function Pronouns(props) {
  return (
    <div>
      <div>Select One</div>
      <img
        src='icons8-boy-48.png'
        onClick={() => props.handleClick('he/him')}
      ></img>
      <p>he/him</p>
      <img
        src='icons8-girl-48.png'
        onClick={() => props.handleClick('she/her')}
      ></img>
      <p>she/her</p>
      <img
        src='icons8-smiling-face-with-smiling-eyes-48.png'
        onClick={() => props.handleClick('they/them')}
      ></img>
      <p>they/them</p>
    </div>
  );
}
