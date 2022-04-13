import React from 'react';
import CV from '../../assets/Entry-CV.pdf';

const Buttons = () => {
    return ( <div className='buttons-div'>
    <a href="#contacts">Contact</a>
   <a style={{marginLeft:"13px"}} href={CV} download>Download CV</a>
    </div> );
}
 
export default Buttons;