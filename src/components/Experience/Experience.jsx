import React from 'react';
import './Experience.css';
import {SiMongodb} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {SiSocketdotio} from 'react-icons/si';
import {SiExpress} from 'react-icons/si';

const Experience = () => {
    return ( <section id='experience'>
        <h2>Experience</h2>
        <h5>What Skills I Have?</h5>
        <div className='container experience_container'>
            <div className='experience_frontend' >
                <h3>Frontend Experience</h3>
                <div className='experience_content'>
                    <article>
                        <h3> <i className="fab fa-html5"></i> HTML</h3>
                        <small>  <i className="fas fa-check-circle"></i>  Intermediate</small>
                    </article>
                     <article>
                        <h3> <i className="fab fa-css3"></i> CSS</h3>
                        <small>  <i className="fas fa-check-circle"></i>  Intermediate</small>
                    </article>
                     <article>
                        <h3> <i className="fab fa-js"></i> JS</h3>
                        <small>  <i className="fas fa-check-circle"></i>  Intermediate</small>
                    </article>
                     <article>
                        <h3> <i className="fa-brands fa-react"></i> React</h3>
                        <small>  <i className="fas fa-check-circle"></i>  Intermediate</small>
                    </article>
                     <article>
                        <h3> <i class="fab fa-bootstrap"></i> Bootstrap</h3>
                        <small>  <i className="fas fa-check-circle"></i> Beginner</small>
                    </article>        
                </div>
            </div>
            <div className='experience_backend' style={{borderLeft:"1px solid grey"}}>
                  <h3>Backend Experience</h3>
                <div className='experience_content'>
                    <article>
                        <h3> <i className="fa-brands fa-php"></i> PHP</h3>
                        <small>  <i className="fas fa-check-circle"></i> Beginner</small>
               
                    </article>
                     <article>
                        <h3> <i className="fa-solid fa-database"></i> MySQL</h3>
                        <small>  <i className="fas fa-check-circle"></i> Beginner</small>
                 
                    </article>
                     <article>
                        <h3><SiMongodb/>Mongo DB</h3>
                        <small>  <i className="fas fa-check-circle"></i> Beginner</small>
            
                    </article>
                     <article>
                        <h3> <FaNodeJs/> Node.js</h3>
                        <small>  <i className="fas fa-check-circle"></i> Beginner</small>
                     
                    </article>
                     <article>
                        <h3> <SiSocketdotio/> Socket.io</h3>
                        <small>  <i className="fas fa-check-circle"></i> Beginner</small>
                     
                    </article>
                     <article>
                        <h3> <SiExpress/> Express.js</h3>
                        <small>  <i className="fas fa-check-circle"></i> Beginner</small>
                     
                    </article>                
                </div>
            </div>
        </div>
    </section> );
}
 
export default Experience;