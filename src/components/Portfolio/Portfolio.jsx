import React from 'react';
import './Portfolio.css';
import img1 from '../../assets/port1.jpg';
import img2 from '../../assets/port2.jpg';
import img3 from '../../assets/port3.jpg';
import img4 from '../../assets/port4.jpg';
import img5 from '../../assets/port5.jpg';
import img6 from '../../assets/port6.jpg';
import img7 from '../../assets/port7.jpg';

const Portfolio = () => {
    return ( <section id='portfolio'>
        <h2>Portfolio</h2>
        <h5>My Recent Work</h5>

        <div className='container portfolio_container'>
            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={img1}/>
                </div>
                <h3>Chat Appication</h3>
                <p>A small basic application created using javascript and socket.io to add users,create groups and chat with them </p>
                <small>Languages used - HTML,CSS,JS,REACT,EXPRESS,MONGODB</small><br/>
                <a href='https://github.com/KevinfernandoCD/ClickLab-MERN-Stack'>Download Source Code</a>
            </article>
              <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img  src={img2}/>
                </div>
                <h3>E-Commerce Site</h3>
                <p>A shopping cart app using the useReducer and useContext API hook in react</p>
                   <small>Languages used - HTML,CSS,JS,REACT</small><br/>
                <a href='https://github.com/KevinfernandoCD/E-Commerce-Shopping-Cart-App-'>Download Source Code</a>
            </article>
            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img  src={img3}/>
                </div>
                <h3>Weather App</h3>
                  <p>Simple Weather app with modern UI using an API</p>
                     <small>Languages used - HTML,CSS,JS,REACT</small><br/>
                <a href='https://github.com/KevinfernandoCD/Weather-App'>Download Source Code</a>
            </article>
            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img  src={img4}/>
                </div>
                <h3>Crypto Currency Tracker</h3>
                  <p>Crypto currency tracker using a crypto tracker API</p>
                     <small>Languages used - HTML,CSS,JS,REACT</small><br/>
                <a href='https://github.com/KevinfernandoCD/Crypto.lk'>Download Source Code</a>
            </article>
            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img  src={img5}/>
                </div>
                <h3>Recipe App</h3>
                  <p>Display different types of food recipes in a modern looking UI using API's</p>
                     <small>Languages used - HTML,CSS,JS,REACT</small><br/>
                <a href='https://github.com/KevinfernandoCD/Recipe-App-'>Download Source Code</a>
            </article>
            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img  src={img6}/>
                </div>
                <h3>Hangman Game</h3>
                  <p>A simple hangman game with game UI </p>
                     <small>Languages used - HTML,CSS,JS,REACT</small><br/>
                <a href='https://github.com/KevinfernandoCD/Hangman'>Download Source Code</a>
            </article>
             <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img  src={img7}/>
                </div>
                <h3>Hotel Admin System Management App</h3>
                  <p>Fully functional hotel admin board management system app using php and mysql</p>
                     <small>Languages used - HTML,CSS,JS,PHP,MYSQL</small><br/>
                <a href='#'>Download Source Code</a>
            </article>
        </div>
    </section> );
}
 
export default Portfolio;