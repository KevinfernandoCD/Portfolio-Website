import React from 'react';
import './Footer.css';

 const Footer = () => {
     return ( <footer>
         <a href="#" className='footer_logo'><i className="fas fa-angle-double-up"></i></a>

         <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#strongholds">Strongholds</a></li>
            <li><a href="#contacts">Contact</a></li>
         </ul>

         <div className='footer_socials'>
             <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
               <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                 <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
         </div>

         <div className='footer_copyright'>
             <small>All of the above contents are created by Kevin Fernando</small><br/>
             <small>&copy; Kevin Fernando, All rights reserved</small>
         </div>

     </footer> );
 }
  
 export default Footer;