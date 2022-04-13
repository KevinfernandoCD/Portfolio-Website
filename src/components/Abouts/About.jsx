import React from 'react';
import './About.css';
import UserImg from '../../assets/user1.jpg';


const About = () => {
    return ( <section id='about'>


        <h2>About Me</h2>
        <h5>Get To Know Me</h5>

        <div className='container about__container'>
            <div className='about_me'>
                <div className='about_me_img'>
                    <img src={UserImg} alt='me'/>
                </div>
            </div>

            <div className='about_content'>
                <div className='about_cards'>
                    <article className='about_card'>
                        <i className="fa-solid fa-award about_card_icon"></i>
                        <h5>Basic Knowledge</h5>
                        <small>Basic Fundamental knowledge about HTML,CSS and JS</small>

                    </article>
                      <article className='about_card'>
                      <i className="fas fa-project-diagram about_card_icon"></i>
                        <h5>Project Based Knowledge</h5>
                        <small>50+ Completed Projects </small>
                    </article>

                    <article className='about_card'>
                        <i className="fa-solid fa-users about_card_icon"></i>
                        <h5>Team Player </h5>
                        <small>Communicating with users or team</small>
                    </article>
                </div>
                <p>Hello, My name is Kevin Fernando and i'm currently working on 
                    being a front-end developer. my main goal is to be a full stack developer however to 
                    become a full stack dev i thought to myself that first i should learn the fundamentals of coding 
                    a web app or a modern website. I have always been into coding since 
                    i was 15 but i didn't had the oppatunity or time to do any 
                    actual coding so after I completed my A/L's and my Internship i started learning front end 
                    development. I started taking courses online. they were really usefull ilearned alot through them
                    I learned about HTML,CSS,JS.... and many more so i'm hoping to
                    use thoese skills to good use at a good company so i can learn more and
                    cotribute my best to the company.If you have any questions feel free to contact me below.
                    Thank you!</p>

                <a href='#contacts' className='contact-button'>Let's Talk</a>
            </div>   
        </div>
    </section> );
}
 
export default About;