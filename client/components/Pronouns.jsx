import React from 'react';
import '../styles/Pronouns.css';

export default function Pronouns(props) {
  const mark = (el, classList, pronoun) => {
    classList.forEach((node) => (node.style.border = 'none'));
    el.style.border = 'solid 1px blue';
    el.style.margin = '5px';
    el.style.padding = '5px';
    props.handleClick(pronoun);
  };
  return (
    <div className='questionare'>
      <div className='prompt'>Select One</div>
      <div className='choices'>
        <div className='options' id='he'>
          <img
            src='icons8-boy-48.png'
            onClick={() =>
              mark(
                document.getElementById('he'),
                document.querySelectorAll('.options'),
                'he/him'
              )
            }
          ></img>
          <p>he/him</p>
        </div>
        <div className='options' id='she'>
          <img
            src='icons8-girl-48.png'
            onClick={() =>
              mark(
                document.getElementById('she'),
                document.querySelectorAll('.options'),
                'she/her'
              )
            }
          ></img>
          <p>she/her</p>
        </div>
        <div className='options' id='they'>
          <img
            src='icons8-smiling-face-with-smiling-eyes-48.png'
            onClick={() =>
              mark(
                document.getElementById('they'),
                document.querySelectorAll('.options'),
                'they/them'
              )
            }
          ></img>
          <p>they/them</p>
        </div>
      </div>
    </div>
  );
}
