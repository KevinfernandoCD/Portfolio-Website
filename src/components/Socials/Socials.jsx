import React from 'react';
import {AiOutlineLinkedin,AiOutlineGithub,AiOutlineInstagram} from 'react-icons/ai';


const Socials = () => {
    return ( <div className='header__socials'>

        <a className='socials' href='https://www.linkedin.com/'><AiOutlineLinkedin style={{paddingTop:"5px"}} className='social-icon'/>Linkedin</a>
        <a style={{marginLeft:"10px"}} className='socials' href='https://www.github.com/'><AiOutlineGithub className='social-icon'/>Github</a>
        <a style={{marginLeft:"10px"}} className='socials' href='https://www.instagram.com/'><AiOutlineInstagram className='social-icon'/>Instagram</a>

    </div> );
}
 
export default Socials;