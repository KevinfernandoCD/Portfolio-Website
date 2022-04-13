import React from 'react';
import { useState } from 'react';
import './Nav.css';


 const Nav = () => {

    const [ active,setActive] = useState("#");

    const setactivenav =(id) => {

        setActive(id)
    }


     return ( <nav>
        <a className={active == "#"?"active":''} href='#' onClick={() => setactivenav('#')}><i className="fa-solid fa-house"></i></a>
        <a className={active == "#about"?"active":''} href='#about' onClick={() => setactivenav('#about')}><i className="fa-solid fa-user"></i></a>
        <a className={active == "#experience"?"active":''} href='#experience' onClick={() => setactivenav('#experience')}><i className="fa-solid fa-book-open"></i></a>
        <a className={active == "#service"?"active":''} href='#service' onClick={() => setactivenav('#service')}><i className="fa-solid fa-briefcase"></i></a>
         <a className={active == "#strongholds"?"active":''} href='#strongholds' onClick={() => setactivenav('#strongholds')}><i className="fa-solid fa-hand-fist"></i></a>
        <a className={active == "#contacts"?"active":''} href='#contacts' onClick={() => setactivenav('#contacts')}><i className="fa-solid fa-phone"></i></a>
     </nav> );
 }
  
 export default Nav;