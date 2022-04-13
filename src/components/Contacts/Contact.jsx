import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contacts = () => {

    const form = useRef();

   const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_t52py4l', 'template_mvjuuog', form.current, 'QlIZBn6ywgnUzFrcP')
      .then((result) => {
          if(result.text == 'OK'){

            alert('Email has been sent')
          }
      }, (error) => {
          console.log(error.text);
      });   
  };
  


    return ( <section id='contacts'>

        <h2>Contact Me</h2>
        <h5>Get in touch</h5>

        <div className='container contact_container'>

            <div className='contact_options'>

                <article className='contact_option'>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <h3>Email</h3>
                    <h4>user@gmail.com</h4>
                    <a href="mailto:user@gamil.com" className='link'>Email me</a>
                </article>
                    <article className='contact_option'>
                   <i className="fab fa-facebook-messenger"></i>
                    <h3>Messanger</h3>
                    <h4>Kevin Fernando</h4>
                    <a href="https://m.me/kevinfernando" className='link'>Chat now</a>
                </article>
                    <article className='contact_option'>
                    <i className="fab fa-whatsapp"></i>
                    <h3>Whatsapp</h3>
                    <h4>+94 XX XXX XXXX</h4>
                    <a href="https://api.whatsapp.com/send?phone=+xxxxxxxxx" className='link'>Direct message</a>
                </article>
            </div>
            <form action='' ref={form}>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="text" name='email' placeholder='Enter your email' required />
            <textarea className='message' name="message" placeholder='Your Message'  rows="7"></textarea>
            <input type="submit" className='submit' value="Send" onClick={sendEmail}  />
            </form>
        </div>
    </section> );
}
 
export default Contacts;