import React from 'react';
import './Header.css';
import Buttons from '../Buttons/Buttons';
import UserImg from '../../assets/user1.jpg';
import Socials from '../Socials/Socials';

const Header = () => {
    return ( <header className='container'>
            <div className='user-img'>
                <img className="img" src={UserImg} alt='User Image'/>
            </div>
        <div className='header__container'>
            <h3>Hello I'm,</h3>
            <h1>Kevin Fernando.</h1>
            <h5 style={{fontWeight:"100",color:"whitesmoke",textAlign:"left"}}>Front-end Developer</h5>
            <Buttons/>
              <Socials/>
              <div className='scroll-div'>
            <a  style={{backgroundColor:"#202020",border:"none",fontSize:"14px",marginTop:"20px"}} href='#contacts' className='scroll__down'>Scroll Down <i className='fa fa-angle-double-down'></i></a>       
        </div>
        </div>
    </header> 
    );
}
 
export default Header;