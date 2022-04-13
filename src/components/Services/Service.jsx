import React from 'react';
import './Service.css';

const Services = () => {
    return ( <section id='service'>
        <h2>Services</h2>
        <h5>What i offer?</h5>

        <div className='container service_container'>
            <article className='service'>
                <div className='service_head'>
                    <h3>UI Design</h3>
                </div>
                <ul className='service_list'>
                    <li><i className="fa-solid fa-check"></i><p>Web sites with mordern user interface.</p></li>
                     <li><i className="fa-solid fa-check"></i><p>Simple JS web applications.</p></li>
                      <li><i className="fa-solid fa-check"></i><p>Handling small UI designs.</p></li>
                       <li><i className="fa-solid fa-check"></i><p>Simple bug fixing.</p></li>
                </ul>
            </article>
             <article className='service'>
                <div className='service_head'>
                    <h3>Web Development</h3>
                </div>
                <ul className='service_list'>
                    <li><i className="fa-solid fa-check"></i><p>Working JS libraries.</p></li>
                     <li><i className="fa-solid fa-check"></i><p>Creating react web applications.</p></li>
                      <li><i className="fa-solid fa-check"></i><p>Handling CSS design patterns.</p></li>
                       <li><i className="fa-solid fa-check"></i><p>Project management.</p></li>
                        <li><i className="fa-solid fa-check"></i><p>Content creation.</p></li>
                </ul>
            </article>
              <article className='service'>
                <div className='service_head'>
                    <h3>Team Building</h3>
                </div>
                <ul className='service_list'>
                    <li><i className="fa-solid fa-check"></i><p>Working with different teams.</p></li>
                     <li><i className="fa-solid fa-check"></i><p>Client friendly.</p></li>
                      <li><i className="fa-solid fa-check"></i><p>Building user friendly apps.</p></li>
                       <li><i className="fa-solid fa-check"></i><p>Understanding clients and building apps for clients.</p></li>
                        <li><i className="fa-solid fa-check"></i><p>Optimizing the user experience.
.</p></li>
                </ul>
            </article>
        </div>
    </section> );
}
 
export default Services;