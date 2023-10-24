import React, { useRef } from 'react'
import "./contact.css"
import htmllogo from "../../assets2/htmllogo.png"
import csslogo from "../../assets2/csslogo.png"
import jslogo from "../../assets2/javascriptlogo.png"
import reactlogo from "../../assets2/reactlogo.png"
import cpplogo from "../../assets2/c++logo.png"

import LinkedinIcon from "../../assets/linkedinlogo.png"
import TwitterIcon from "../../assets/twitter.png"
import GithubIcon from "../../assets/githublogo.png"
import InstagramIcon from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c54q3aj', 'template_2ahzzsv', form.current, 'ZIZaRM8YdkB2L1qbr')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent successfully !');
          }, (error) => {
              console.log(error.text);
              alert('some error occurred');
          });
    };

  return (
    <section id='contactPage'>

        <div id='skills'>  
            <h1 className='contactPageTitle'>MY Skills</h1>
            <p className='skillDesc'>
                I have had the opportunity to explore and work on the below mentioned languages, libraries and frameworks.
            </p>
            <div className='skillImgs'>
                <div className='skillImgDiv'><img src={htmllogo} alt='html' className='skillImg'/></div>
                <div className='skillImgDiv'><img src={csslogo} alt='css' className='skillImg'/></div>
                <div className='skillImgDiv'><img src={jslogo} alt='javascript' className='skillImg'/></div>
                <div className='skillImgDiv'><img src={reactlogo} alt='react' className='skillImg'/></div>
                <div className='skillImgDiv'><img src={cpplogo} alt='c++' className='skillImg'/></div>
            </div>
        </div>


        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'></input>
                <input type='email' className='email' placeholder='Your Email' name='your_email'></input>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/rishabh-joshi-b3aa31247/' target='_blank'><img src={LinkedinIcon} alt='facebook' className='Linkedinlink'/></a>
                    <a href='https://twitter.com/_Rishabhjoshii_' target='_blank'><img src={TwitterIcon} alt='twitter' className='link'/></a>
                    <a href='https://github.com/rishabhjoshii' target='_blank'><img src={GithubIcon} alt='youtube' className='link'/></a>
                    <a href='https://www.instagram.com/_rishabhjoshii_/' target='_blank'><img src={InstagramIcon} alt='instgram' className='link'/></a>
                </div> 

            </form>
            
        </div>
    </section>
  )
}

export default Contact